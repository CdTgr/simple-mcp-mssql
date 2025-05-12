import sql from 'mssql'

export class MsConnect {
  constructor(
    private host: string,
    private port: number,
    private user: string,
    private password?: string,
    private database?: string,
    private encrypt = false,
  ) {}

  async executeQuery(query: string, database?: string) {
    const pool = await sql.connect({
      user: this.user,
      password: this.password,
      server: this.host,
      port: this.port,
      database: database || this.database,
      options: {
        encrypt: this.encrypt,
      },
    })

    const result = await pool.request().query(query)

    return result
  }
}
