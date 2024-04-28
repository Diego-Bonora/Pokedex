import React from "react";
import { getPokemonFavouriteByUserApi } from "../api/favourite";
import { GetPokemonDetailsByIdApi } from "../api/pokemonApi";
import { useAuth } from "../hooks/useAuth";
import { PokemonList } from "../components/PokemonList";
import { useFocusEffect } from "@react-navigation/native"
import { NotLogged } from "../components/NotLogged";

function Favourite() {

    const [pokemons, setPokemons] = React.useState([]);
    const { auth } = useAuth();

    useFocusEffect(
        React.useCallback(() => {
            if (auth) {
                (async () => {
                    const response = await getPokemonFavouriteByUserApi(auth);
                    const pokemonsArray = []

                    for await (const id of response.list) {
                        const pokemonDetails = await GetPokemonDetailsByIdApi(id);
                        pokemonsArray.push({
                            id: pokemonDetails.id,
                            name: pokemonDetails.name,
                            type: pokemonDetails.types[0].type.name,
                            order: pokemonDetails.order,
                            image: pokemonDetails.sprites.other['official-artwork'].front_default
                        })
                    }
                    setPokemons(pokemonsArray)
                })()
            }
        }, [auth])
    );


    return !auth ? (
        <NotLogged />
    ) : (
        <PokemonList
            pokemons={pokemons}
        />
    )
}

export { Favourite }