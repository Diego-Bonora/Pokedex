import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { ItemMenu } from "./ItemMenu";

function UserData() {
    const { auth, logout } = useAuth()

    return (
        <View style={styles.content}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome back!</Text>
                <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
                <ItemMenu title="username" text={auth.username} />
                <ItemMenu title="Email" text={auth.email} />
                <ItemMenu title="Favorites" text={`0 Pokemons`} />
            </View>

            <Button title="Logout" onPress={logout} />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    titleContainer: {
        marginBottom: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,

    },
    dataContent: {
        marginBottom: 20,
    },
})

export { UserData }