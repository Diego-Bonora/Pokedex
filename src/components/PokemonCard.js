import React from "react";
import { StyleSheet, Text, Image, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { getColorByPokemonType } from "../utils/getColorByPokemonType";
import { capitalize } from "lodash";

function PokemonCard({ pokemon }) {

    const navigation = useNavigation()

    const goToPokemon = () => {
        navigation.navigate('Pokemon', { id: pokemon.id })
    }

    const pokemonColor = getColorByPokemonType(pokemon.type)
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }

    return (
        <>
            <TouchableWithoutFeedback onPress={goToPokemon}>
                <View style={styles.card}>
                    <View style={styles.spacing}>
                        <View style={bgStyles}>
                            <View style={styles.texts}>
                                <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                                <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                            </View>
                            <Image source={{ uri: pokemon.image }} style={styles.image} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    texts: {
        flexDirection: "row"
    },
    number: {
        position: "absolute",
        right: 10,
        color: "white",
        fontSize: 15,
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
})

export { PokemonCard }