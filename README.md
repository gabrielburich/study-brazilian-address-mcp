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
