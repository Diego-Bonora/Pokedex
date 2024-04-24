import React from "react";
import { Text, Button } from "react-native"
import { getPokemonFavouriteApi } from "../api/favourite";

function Favourite() {

    const checkFavourites = async () => {
        const respone = await getPokemonFavouriteApi();
        console.log(respone);
    }

    return (
        <>
            <Text>Favorite</Text>
            <Button title="get Favourite" onPress={checkFavourites} />
        </>
    );
}

export { Favourite }