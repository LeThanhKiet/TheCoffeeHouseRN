import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// redux
import store from "./src/Redux/store";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppNavigation from "./src/AppNavigation/route";

export default function App() {
    return <AppNavigation />;
}
