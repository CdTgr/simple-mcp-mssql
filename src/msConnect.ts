import sql from 'mssql'

import { getBoolean } from './utils'

export const executeQuery = async (query: string, database?: string) => {
  const pool = await sql.connect({
    user: process.env.MS_SQL_USER,
    password: process.env.MS_SQL_PASSWORD,
    server: process.env.MS_SQL_HOST,
    port: Number(process.env.MS_SQL_PORT),
    database: database || process.env.MS_SQL_DATABASE,
    options: {
      encrypt: getBoolean(process.env.MS_SQL_ENCRYPTION, 'true'),
    },
  })

  const result = await pool.request().query(query)

  return result
}
