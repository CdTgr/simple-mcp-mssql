# 🧩 Simple MCP Server for MSSQL

A lightweight command-line tool for connecting to and querying Microsoft SQL Server (MSSQL) using the **Model Context Protocol (MCP)**.

Use this tool to bridge your AI or context-aware systems with MSSQL databases quickly and securely.

> 🙌 Contributions are welcome!

---

## 🚀 Installation

Install globally via npm:

```sh
npm i -g simple-mcp-mssql
```

## 🛠️ Usage & Debugging

To inspect and debug your MCP server connection, use the official MCP Inspector:

```sh
npx @modelcontextprotocol/inspector simple-mcp-mssql \
  --password '<your-password>' \
  -d '<default-database>'
```

## 📘 Available Options

You can view all CLI options by running:

```sh
simple-mcp-mssql --help
```

| Option       | Alias | Type   | Required | Description                    | Default     |
| ------------ | ----- | ------ | -------- | ------------------------------ | ----------- |
| `--host`     | `-h`  | string | No       | Database host address          | `localhost` |
| `--port`     | `-p`  | number | No       | Database port                  | `1433`      |
| `--user`     | `-u`  | string | No       | Username for authentication    | `sa`        |
| `--password` | `-P`  | string | Yes      | Password for the database user | _(none)_    |
| `--database` | `-d`  | string | Yes      | Default database to connect to | _(none)_    |

## 💬 Feedback & Contributions

If you encounter issues, have suggestions, or want to contribute, feel free to open an [issue or pull request](https://github.com/CdTgr/simple-mcp-mssql).

## 📄 License

[MIT](./LICENSE) © 2025 GhosT
