// Modules
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Tool
import searchByCepTool from "./tool/searchByCep/index.js";

const server = new McpServer({
    name: "mcp-address-server",
    version: "1.0.0"
});

server.registerTool(
    "searchByCep",
    {
        title: "Searh Address By CEP",
        description: "Get address information based on a CEP number",
        inputSchema: { cep: z.number() }
    },
    async ({ cep }) => {
        const address = await searchByCepTool(cep)
        return {
            content: [{ type: "text", text: JSON.stringify(address) }]
        }
    }
);


const transport = new StdioServerTransport();
await server.connect(transport);