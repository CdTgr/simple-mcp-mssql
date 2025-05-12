# Simple mcp server for mssql

A simple MCP server for conneting and querying to mssql database.

Utilize the tool to connect your AI to mssql.

> Contributters are welcome

## Installation

```sh
npm i -g simple-mcp-mssql
```

### debugging

```sh
npx @modelcontextprotocol/inspector simple-mcp-mssql \
  --password '<your password>' \
  -d '<default db>'
```

### Availalbe options

All available option can be found by running the following command:

```sh
simple-mcp-mssql --help
```

| Option   | Alias | Type   | Required | Description                     | Default   |
| -------- | ----- | ------ | -------- | ------------------------------- | --------- |
| host     | h     | string | No       | The host of your database       | localhost |
| port     | p     | number | No       | The port to use                 | 1433      |
| user     | u     | string | No       | The user to authenticate        | sa        |
| password | P     | string | Yes      | The password to use             |           |
| database | d     | string | Yes      | The default database to connect |           |
