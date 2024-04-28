import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull, find } from "lodash";
import { FAVOURITE_STORAGE } from "../utils/constants";

export async function getPokemonFavouriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVOURITE_STORAGE);
        return response ? JSON.parse(response) : [];
    } catch (error) {
        throw error;
    }
}

export async function addPokemonFavouriteApi(id, data) {
    try {
        const favourites = await getPokemonFavouriteApi();
        let result = find(favourites, function (obj) {
            if (obj.username === data.username) {
                return true;
            }
        });

        result ? result.list.push(id) : favourites.push({ "username": data.username, "list": [id] });
        await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(favourites));
    } catch (error) {
        throw error;
    }
}

export async function isPokemonFavouriteApi(id, data) {
    try {
        const response = await getPokemonFavouriteApi();
        let result = find(response, function (obj) {
            if (obj.username === data.username) {
                return true;
            }
        });
        return includes(result.list, id);
    } catch (error) {
        throw error;
    }
}

export async function removePokemonFavouriteApi(id, data) {
    try {
        const favourites = await getPokemonFavouriteApi();
        let result = find(favourites, function (obj) {
            if (obj.username === data.username) {
                return true;
            }
        });
        pull(result.list, id)
        await AsyncStorage.setItem(FAVOURITE_STORAGE, JSON.stringify(favourites));
    } catch (error) {
        throw error;
    }
}