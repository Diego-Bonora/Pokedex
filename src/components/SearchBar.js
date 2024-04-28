import React from "react";
import { TextInput, View, StyleSheet } from 'react-native';

function SearchBar({ searchText, setSearchText }) {

    const handleChangeText = (text) => {
        setSearchText(text);
    };

    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.searchBarInput}
                placeholder="Search for a Pokemon"
                onChangeText={handleChangeText}
                value={searchText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        alignItems: "center",
        backgroundColor: '#f0f0f0',
        marginTop: 10,
    },
    searchBarInput: {
        height: 40,
        width: "80%",
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
});

export { SearchBar }