import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_STORAGE } from '../utils/constants';

export async function getUsersApi() {
    try {
        const response = await AsyncStorage.getItem(USER_STORAGE);
        return response ? JSON.parse(response) : [];
    } catch (error) {
        throw error;
    }
}

export async function addUserApi(data) {
    try {
        const response = await getUsersApi();
        for await (const users of response) {
            if (users.email === data.email) {
                return ("this email ir alredy registered")
            } else if (users.username === data.username) {
                return ("this username ir alredy registered")
            }
        }
        response.push(data)
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(response));
    } catch (error) {
        throw error
    }
}

export async function loginApi(data) {
    try {
        const response = await getUsersApi();
        for await (const users of response) {
            if ((users.email === data.usernameOrEmail || users.username === data.usernameOrEmail) && users.password === data.password) {
                return (users)
            }
        }
        return (false)
    } catch (error) {
        throw error
    }
}