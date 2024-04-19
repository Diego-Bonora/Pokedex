import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Account } from "../Screens/Account";

const Stack = createStackNavigator()

function AccountNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center', // This centers the title horizontally
            }}
        >
            <Stack.Screen
                name="Account "
                component={Account}

            />
        </Stack.Navigator>
    );
};

export { AccountNavigation }