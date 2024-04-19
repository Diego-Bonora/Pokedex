import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Account } from "../Screens/Account";
import { Pokedex } from "../Screens/Pokedex";
import { Favorite } from "../Screens/Favorite";

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="Pokedex" component={Pokedex} />
            <Tab.Screen name="Favorite" component={Favorite} />
        </Tab.Navigator>
    );
}

export { Navigation }