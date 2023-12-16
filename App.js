import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/AppNavigation/route";

// redux
import store from "./src/Redux/store";
import { Provider } from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
