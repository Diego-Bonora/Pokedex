import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favourite } from "../Screens/Favourite";
import { Pokemon } from "../Screens/Pokemon";

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
            <Stack.Screen name="Pokemon" component={Pokemon} options={{ title: "", headerTransparent: true }} />
        </Stack.Navigator>
    );
};

export { FavouriteNavigation }