import React from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import { PokemonList } from "../components/PokemonList";

function Pokedex() {
    const [pokemons, setPokemons] = React.useState([])

    React.useEffect(() => {
        (async () => {
            await loadPokemons();
        })()
    }, [])

    console.log(pokemons)
    const loadPokemons = async () => {
        try {
            const respone = await getPokemonsApi();

            const pokemonsArray = []
            for await (const pokemon of respone.results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }
            setPokemons([...pokemons, ...pokemonsArray])
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <PokemonList pokemons={pokemons} />
        </>
    );
}

export { Pokedex }