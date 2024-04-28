import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useFormik } from "formik"
import * as Yup from "yup"
import { useAuth } from "../../hooks/useAuth";
import { loginApi } from "../../api/users";

function LoginForm() {

    const [error, setError] = React.useState("");
    const { login, logout } = useAuth()

    const formik = useFormik({
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        initialValues: { usernameOrEmail: "", password: "" },
        onSubmit: async (initialValues) => {
            const response = await loginApi(initialValues);
            response ? login(response) : setError("username or password incorrect")
        }
    });

    return (
        <>
            <TextInput
                placeholder="Username or Email"
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.usernameOrEmail}
                onChangeText={(text) => formik.setFieldValue("usernameOrEmail", text)}
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
        usernameOrEmail: Yup.string().required("Username or Email is needed"),
        password: Yup.string().required("password is needed"),
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    errors: {
        marginTop: -5,
        marginLeft: 15,
        color: "#f00",
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