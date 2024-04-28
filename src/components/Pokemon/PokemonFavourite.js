import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { addPokemonFavouriteApi, isPokemonFavouriteApi, removePokemonFavouriteApi } from "../../api/favourite";
import { useAuth } from "../../hooks/useAuth";

function PokemonFavourite({ id }) {

    const { auth } = useAuth();
    const [isFavourite, setIsFavourite] = React.useState(undefined);
    const [reloadCheck, setReloadCheck] = React.useState(true);
    const Icon = isFavourite ? FontAwesome : FontAwesome5;

    React.useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavouriteApi(id, auth);
                setIsFavourite(response)
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
            await addPokemonFavouriteApi(id, auth)
            onReloadCheckFavourite()
        } catch (error) {
            console.log(error);
        }
    }

    const removeFavourite = async () => {
        try {
            await removePokemonFavouriteApi(id, auth)
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