import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favourite } from "../Screens/Favourite";

const Stack = createStackNavigator()

function FavouriteNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center', // This centers the title horizontally
            }}
        >
            <Stack.Screen
                name="Favourite "
                component={Favourite}

            />
        </Stack.Navigator>
    );
};

export { FavouriteNavigation }