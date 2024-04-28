import React from "react";

export const AuthContext = React.createContext({
    user: undefined,
    login: () => { },
    logout: () => { },
});

export function AuthProvider({ children }) {

    const [auth, setAuth] = React.useState(undefined);
    const [pokemons, setPokemons] = React.useState([]);

    const login = (userData) => {
        setAuth(userData);
    }

    const logout = () => {
        setAuth(undefined)
        setPokemons([])
    }

    const valueContext = {
        pokemons,
        setPokemons,
        auth,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}