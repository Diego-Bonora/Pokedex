import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

function LoginRegisterMenu() {
    const [pageLogin, setPageLogin] = React.useState(true)


    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={{ borderColor: pageLogin ? "blue" : "black", color: pageLogin ? "blue" : "black", ...styles.title }} onPress={() => setPageLogin(true)}>Log in</Text>
                <Text style={{ borderColor: pageLogin ? "black" : "blue", color: pageLogin ? "black" : "blue", ...styles.title }} onPress={() => setPageLogin(false)}>Register</Text>
            </View >
            <View>
                {pageLogin ? <LoginForm /> : <RegisterForm />}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: -40,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        borderBottomWidth: 1,
        marginTop: 50,
        marginBottom: 15,
    },
})

export { LoginRegisterMenu }