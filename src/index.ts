import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { config } from 'dotenv'
import { z } from 'zod'

import { executeQuery } from './msConnect'

config()

const runServer = async () => {
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
      const response = await executeQuery(query, database)

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
