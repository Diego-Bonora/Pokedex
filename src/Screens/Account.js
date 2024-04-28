import React from "react";
import { View } from "react-native"
import { UserData } from "../components/Auth/UserData";
import { LoginRegisterMenu } from "../components/Auth/LoginRegisterMenu";
import { useAuth } from "../hooks/useAuth";

function Account() {

    const { auth } = useAuth();

    return (
        <View>
            {auth ? <UserData /> : <LoginRegisterMenu />}

        </View>
    );
}

export { Account }