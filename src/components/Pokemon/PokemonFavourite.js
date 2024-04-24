import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { addPokemonFavouriteApi, isPokemonFavouriteApi, removePokemonFavouriteApi } from "../../api/favourite";

function PokemonFavourite({ id }) {

    const [isFavourite, setIsFavourite] = React.useState(undefined);
    const [reloadCheck, setReloadCheck] = React.useState(true)
    const Icon = isFavourite ? FontAwesome : FontAwesome5

    React.useEffect(() => {
        (async () => {
            try {
                const respone = await isPokemonFavouriteApi(id);
                setIsFavourite(respone)
            } catch (error) {
                setIsFavourite(false)
            }
        })()
    }, [id, reloadCheck])

    const onReloadCheckFavourite = () => {
        setReloadCheck(!reloadCheck)
    }

    const addFavourite = async () => {
        try {
            await addPokemonFavouriteApi(id)
            onReloadCheckFavourite()
        } catch (error) {
            console.log(error);
        }
    }

    const removeFavourite = async () => {
        try {
            await removePokemonFavouriteApi(id)
            onReloadCheckFavourite()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Icon
            name="heart"
            color="#fff"
            size={20}
            onPress={isFavourite ? removeFavourite : addFavourite}
            style={{ marginRight: 20, }}
        />
    )
}

export { PokemonFavourite }