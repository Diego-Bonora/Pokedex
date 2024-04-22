import React from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemonApi";
import { PokemonList } from "../components/PokemonList";
import { SafeAreaView } from "react-native-safe-area-context";

function Pokedex() {
    const [pokemons, setPokemons] = React.useState([])
    const [netxUrl, setNextUrl] = React.useState(null)
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            await loadPokemons();
        })()
    }, [loadPokemons])

    const loadPokemons = React.useCallback(async () => {
        try {
            setLoading(true);
            const respone = await getPokemonsApi(netxUrl);
            setNextUrl(respone.next)

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
        } finally {
            setLoading(false);
        }
    }, [pokemons, netxUrl]);

    return (
        <SafeAreaView>
            <PokemonList
                pokemons={pokemons}
                loadPokemons={loadPokemons}
                isNext={netxUrl}
                isLoading={loading}
            />
        </SafeAreaView>
    );
}

export { Pokedex }