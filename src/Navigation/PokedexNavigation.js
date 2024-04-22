import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Pokedex } from "../Screens/Pokedex";
import { Pokemon } from "../Screens/Pokemon";

const Stack = createStackNavigator()

function PokedexNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center', // This centers the title horizontally
            }}
        >
            <Stack.Screen name="Pokedex" component={Pokedex} options={{ headerShown: false }} />
            <Stack.Screen name="Pokemon" component={Pokemon} options={{ title: "", headerTransparent: true }} />
        </Stack.Navigator>
    );
};

export { PokedexNavigation }