import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NotLogged() {
    const navigation = useNavigation()

    return (
        <View style={styles.content}>
            <Text style={styles.text}> To view your favorite Pokémon, you'll need to log in. </Text>
            <Button title="Login" onPress={() => navigation.navigate("Account")} />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 50,
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 16,
    },
})

export { NotLogged }