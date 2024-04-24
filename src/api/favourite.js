import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from "lodash";
import { FAVOURITE_STORAGE } from "../utils/constants";

export async function getPokemonFavouriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVOURITE_STORAGE);
        return response ? JSON.parse(response) : [];
    } catch (error) {
        throw error;
    }
}

export async function addPokemonFavouriteApi(id) {
    try {
        const favourites = await getPokemonFavouriteApi();
        favourites.push(id);
        await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(favourites));
    } catch (error) {
        throw error;
    }
}

export async function isPokemonFavouriteApi(id) {
    try {
        const respone = await getPokemonFavouriteApi();
        return includes(respone, id);
    } catch (error) {
        throw error;
    }
}

export async function removePokemonFavouriteApi(id) {
    try {
        const favourites = await getPokemonFavouriteApi();
        const newFavourites = pull(favourites, id)
        await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(newFavourites));
    } catch (error) {
        throw error;
    }
}