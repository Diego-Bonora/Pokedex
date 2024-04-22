import React from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { PokemonCard } from "./PokemonCard";

function PokemonList({ pokemons, loadPokemons, isNext, isLoading }) {

    const loadMore = () => {
        loadPokemons();
    }

    return (
        <>
            <FlatList
                data={pokemons}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pokemon) => String(pokemon.id)}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                contentContainerStyle={styles.flatListContentContainer}
                onEndReached={!isLoading && isNext && loadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    isLoading && isNext &&
                    (<ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />)
                }
            />
        </>
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
})

export { PokemonList }