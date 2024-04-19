import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icons from 'react-native-vector-icons/FontAwesome';
import { Image } from "react-native";
import { FavouriteNavigation } from "./FavouriteNavigation";
import { AccountNavigation } from "./AccountNavigation";
import { PokedexNavigation } from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

const renderPokeball = () => {
    return (
        <Image
            source={require('../assets/pokeball.png')}
            style={{
                width: 75,
                height: 75,
                top: -18
            }}
        />
    );
};

function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Favourite"
                component={FavouriteNavigation}
                options={{
                    tabBarLabel: "Favourite",
                    tabBarIcon: ({ color, size }) => (<Icons name="heart" color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name="Pokedex"
                component={PokedexNavigation}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderPokeball()
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountNavigation}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color, size }) => (<Icons name="user" color={color} size={size} />)
                }}
            />
        </Tab.Navigator>
    );
}

export { Navigation }