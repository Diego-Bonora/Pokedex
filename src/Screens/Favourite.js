import React from "react";
import { getPokemonFavouriteApi } from "../api/favourite";
import { GetPokemonDetailsByIdApi } from "../api/pokemonApi";
import { useAuth } from "../hooks/useAuth";
import { PokemonList } from "../components/PokemonList";
import { useFocusEffect } from "@react-navigation/native"
import { NotLogged } from "../components/NotLogged";
import { find } from "lodash";

function Favourite() {

    const [pokemons, setPokemons] = React.useState([]);
    const { auth } = useAuth();

    useFocusEffect(
        React.useCallback(() => {
            if (auth) {
                (async () => {
                    const response = await getPokemonFavouriteApi();
                    const pokemonsArray = []

                    let result = find(response, function (obj) {
                        if (obj.username === auth.username) {
                            return true;
                        }
                    });

                    if (result) {
                        for await (const id of result.list) {
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
                    } else {
                        setPokemons([])
                    }
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