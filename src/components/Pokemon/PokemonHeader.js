import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View } from "react-native";
import { capitalize } from "lodash";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

function PokemonHeader({ name, order, image, type }) {
    const color = getColorByPokemonType(type);

    const bgStyles = { backgroundColor: color, ...styles.bgStyle }

    return (
        <>
            <View style={bgStyles} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    bgStyle: {
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 27,
    },
    order: {
        color: "white",
        fontWeight: "bold",
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain"
    },
})

export { PokemonHeader }