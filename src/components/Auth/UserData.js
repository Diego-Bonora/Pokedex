import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { ItemMenu } from "./ItemMenu";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import { getPokemonFavouriteByUserApi } from "../../api/favourite";

function UserData() {
    const { auth, logout } = useAuth();
    const [total, setTotal] = React.useState(0);

    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                try {
                    const response = await getPokemonFavouriteByUserApi(auth);
                    setTotal(size(response.list));
                } catch (error) {
                    setTotal(0)
                }
            })()
        }, [])
    )

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
                <ItemMenu title="Favorites" text={total} />
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