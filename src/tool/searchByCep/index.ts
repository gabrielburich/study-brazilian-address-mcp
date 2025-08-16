import searchByCepUseCase from "../../useCase/searchByCep/index.js"
import type { Address } from "../../useCase/searchByCep/type"

function searchByCepTool(cep: number): Promise<Address> {
    return searchByCepUseCase(cep)
}

export default searchByCepTool