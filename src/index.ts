#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import Yargs from 'yargs'
import { z } from 'zod'

import { MsConnect } from './msConnect.js'
import { getBoolean } from './utils.js'

const runServer = async () => {
  const options = await Yargs(process.argv)
    .option('host', {
      alias: 'h',
      type: 'string',
      description: 'The host of the MS SQL server',
      default: process.env.MS_SQL_HOST || 'localhost',
    })
    .option('port', {
      alias: 'p',
      type: 'number',
      description: 'The port of the MS SQL server',
      default: parseInt(process.env.MS_SQL_PORT || '1433', 10),
    })
    .option('user', {
      alias: 'u',
      type: 'string',
      description: 'The user of the MS SQL server',
      default: process.env.MS_SQL_USER || 'sa',
    })
    .option('password', {
      alias: 'P',
      type: 'string',
      description: 'The password of the MS SQL server',
      demandOption: true,
    })
    .option('database', {
      alias: 'd',
      type: 'string',
      description: 'The database of the MS SQL server',
      demandOption: true,
      default: process.env.MS_SQL_DATABASE || '',
    })
    .option('encrypt', {
      alias: 'e',
      type: 'boolean',
      description: 'Whether to encrypt the connection',
      default: getBoolean(process.env.MS_SQL_ENCRYPT, 'F'),
    })
    .parse()

  // Create an MCP server
  const server = new McpServer({
    name: 'simple-mcp-mssql',
    version: '0.1.0',
  })

  // Add tools
  server.tool(
    'sql-query',
    // 'Run an SQL query against the database',
    {
      query: z.string().describe('The SQL query to execute'),
      database: z.string().optional().describe('The database to use'),
    },
    async ({ query, database }: { query: string; database?: string }) => {
      const response = await new MsConnect(
        options.host,
        options.port,
        options.user,
        options.password,
        options.database,
        options.encrypt,
      ).executeQuery(query, database)

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response),
          },
        ],
      }
    },
  )

  const transport = new StdioServerTransport()

  await server.connect(transport)
}

runServer().catch((err) => {
  console.error('Error starting MCP server:', err)
  process.exit(1)
})
