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
                                <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                                <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <View style={styles.imageBg} />
                                <Image source={{ uri: pokemon.image }} style={styles.image} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback >
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
        padding: 10,
    },
    texts: {
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
    },
    number: {
        color: "white",
        fontSize: 15,
    },
    imageContainer: {
        bottom: -7,
        right: -7,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
    imageBg: {
        backgroundColor: "white",
        borderRadius: 100,
        opacity: 0.7,
        width: 105,
        height: 105,
        position: "absolute",
    },
    image: {
        width: 100,
        height: 100,
    },
})

export { PokemonCard }