import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// redux
import store from "./src/Redux/store";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppNavigation from "./src/AppNavigation/route";
import SignupScreen from "./src/Screens/SignupScreen";
import LoginScreen from "./src/Screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // <Provider store={store}>
        //     <AppNavigation />
        // </Provider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={AppNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
