import type { Address } from "./type"

async function searchByCepUseCase(cep: string): Promise<Address> {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);
        return await response.json() as Address;
    } catch (error) {
        console.error("Error to fetch address by CEP", error);
        throw error;
    }
    
}

export default searchByCepUseCase