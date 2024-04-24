import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native"
import { GetPokemonDetailsByIdApi } from "../api/pokemonApi";
import { PokemonHeader } from "../components/Pokemon/PokemonHeader";
import { PokemonType } from "../components/Pokemon/PokemonType";
import { PokemonStats } from "../components/Pokemon/PokemonStats";
import Icons from 'react-native-vector-icons/FontAwesome';
import { PokemonFavourite } from "../components/Pokemon/PokemonFavourite";
import { useAuth } from "../hooks/useAuth";

function Pokemon({ route: { params }, navigation }) {

    const [pokemon, setPokemon] = React.useState(null);
    const { auth } = useAuth();

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => auth && <PokemonFavourite id={pokemon?.id} />,
            headerLeft: () => <Icons name="arrow-left" color="#fff" size={20} style={{ marginLeft: 20 }} onPress={navigation.goBack} />
        })
    }, [navigation, params, pokemon])

    React.useEffect(() => {
        (async () => {
            try {
                const respone = await GetPokemonDetailsByIdApi(params.id);
                setPokemon(respone);
            } catch (error) {
                navigation.goBack();
            }
        })()
    })

    if (!pokemon) return (<ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />);

    return (
        <ScrollView>
            <PokemonHeader
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other['official-artwork'].front_default}
                type={pokemon.types[0].type.name}
            />
            <PokemonType types={pokemon.types} />
            <PokemonStats stats={pokemon.stats} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
})

export { Pokemon }