import React from "react";
import { Text, View, StyleSheet, TextInput, Button, Keyboard } from "react-native";
import { useFormik } from "formik"
import * as Yup from "yup"
import { user, userDetails } from "../../utils/userDB";
import { useAuth } from "../../hooks/useAuth";

function LoginForm() {

    const [error, setError] = React.useState("");
    const { login, logout } = useAuth()

    const formik = useFormik({
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        initialValues: { username: "", password: "" },
        onSubmit: ({ username, password }) => {
            if (username !== user.username || password !== user.password) {
                setError("username or password incorrect")
            } else {
                login(userDetails)
            }
        }
    });

    return (
        <>
            <Text style={styles.title}>Log in</Text>
            <TextInput
                placeholder="Username"
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue("username", text)}
            />
            <Text style={styles.errors}>{formik.errors.username}</Text>
            <TextInput
                placeholder="Password"
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
            />
            <Text style={styles.errors}>{formik.errors.password}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Log in" onPress={formik.handleSubmit} />
            </View>
            <Text style={styles.errorNoLogin}>{error}</Text>

        </>
    )
}

function validationSchema() {
    return {
        username: Yup.string().required("Username is needed"),
        password: Yup.string().required("password is needed"),
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    errors: {
        // textAlign: "center",
        marginTop: -5,
        marginLeft: 15,
        color: "#f00",
        // marginTop: 2,
    },
    buttonContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    errorNoLogin: {
        textAlign: "center",
        color: "#f00",
        marginTop: 5,
    },
})

export { LoginForm }