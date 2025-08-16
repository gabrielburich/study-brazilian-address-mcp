# study-brazilian-address-mcp

Repository to study MCP Servers.

This MCP server has a tool to search Address information by CEP.

# Project strucutre

```
├── src
│   ├── index.ts // mdc server code
│   ├── tool
│   │   └── searchByCep
│   │       └── index.ts // tool logic responsability
│   └── useCase
│       └── searchByCep
│           ├── index.ts // use case to search address data
│           └── type.ts // address structure
└── tsconfig.json
```

I used the [viacep](https://viacep.com.br/) api to search address data.

# MCP server configuration

```
{
  "mcpServers": {
    "mcp-cep": {
      "command": "node",
      "args": ["{your path}/index.js"]
    }
  }
}
```


# Run example:

Add it on vs code, cursor, etc:

<img width="428" height="48" alt="tool" src="https://github.com/user-attachments/assets/f79e27ec-cb3c-4fae-8c63-3dea523d861f" />

Usage example:

<img width="345" height="581" alt="mcp-cep" src="https://github.com/user-attachments/assets/97ea772f-4237-4ac5-97d8-2b2f83487e60" />
