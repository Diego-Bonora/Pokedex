import { API_HOST } from "../utils/constants"

export async function getPokemonsApi(endpointUrl) {
    try {
        const url = `${API_HOST}/pokemon?limit=20offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function GetPokemonDetailsByIdApi(id) {
    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const respone = await fetch(url);
        const result = await respone.json();
        return result;
    } catch (error) {
        throw error;
    }
}