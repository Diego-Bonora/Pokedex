import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

function PokemonList({ pokemons }) {
    return (
        <>
            <FlatList
                data={pokemons}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pokemon) => String(pokemon.id)}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                contentContainerStyle={styles.flatListContentContainer}
            />
        </>
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})

export { PokemonList }