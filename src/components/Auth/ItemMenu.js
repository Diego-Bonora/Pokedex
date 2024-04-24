import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ItemMenu({ title, text }) {
    return (
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}:</Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemMenu: {
        flexDirection: "row",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#CFCFCF"
    },
    itemMenuTitle: {
        fontWeight: "bold",
        paddingRight: 10,
        width: 120,
    },
})

export { ItemMenu }