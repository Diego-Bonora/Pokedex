import React from "react";
import { Text, Button, StyleSheet, TextInput, View, ScrollView } from "react-native";
import { useFormik } from "formik"
import * as Yup from "yup"
import { addUserApi } from "../../api/users";

function RegisterForm() {

    const [error, setError] = React.useState("");

    const formik = useFormik({
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        initialValues: { fisrtName: "", lastName: "", email: "", username: "", password: "" },
        onSubmit: async (initialValues) => {
            const response = await addUserApi(initialValues);
            response ? setError(response) : console.log("all ok");;
        }
    });

    return (
        <ScrollView>
            <TextInput
                placeholder="First Name"
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.firstName}
                onChangeText={(text) => formik.setFieldValue("firstName", text)}
            />
            <Text style={styles.errors}>{formik.errors.firstName}</Text>
            <TextInput
                placeholder="Last Name"
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.lastName}
                onChangeText={(text) => formik.setFieldValue("lastName", text)}
            />
            <Text style={styles.errors}>{formik.errors.lastName}</Text>
            <TextInput
                placeholder="Email"
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.email}
                onChangeText={(text) => formik.setFieldValue("email", text)}
            />
            <Text style={styles.errors}>{formik.errors.email}</Text>
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
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
            />
            <Text style={styles.errors}>{formik.errors.password}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Register" onPress={formik.handleSubmit} />
            </View>
            <Text style={styles.errorInRegister}>{error}</Text>
        </ScrollView>
    )
}

function validationSchema() {
    return {
        firstName: Yup.string().required("Firstname is needed"),
        lastName: Yup.string().required("Lastname is needed"),
        email: Yup.string().email().required("Email is needed"),
        username: Yup.string().required("Username is needed"),
        password: Yup.string().min(8).required("Password is needed"),
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
        marginTop: -10,
        marginLeft: 15,
        color: "#f00",
    },
    buttonContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    errorInRegister: {
        textAlign: "center",
        color: "#f00",
        marginTop: 5,
    },
})

export { RegisterForm }