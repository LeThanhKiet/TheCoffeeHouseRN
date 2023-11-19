import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Screen
import HomeScreen from "../Screens/HomeScreen";
import BookingScreen from "../Screens/BookingScreen";
import StoreLocationScreen from "../Screens/StoreLocationScreen";
import VoucherScreen from "../Screens/VoucherScreen";

import StoreLocationDetail from "../Screens/StoreLocationDetail";

// import Component

import Header from "../Components/Header";

const HomeStack = createNativeStackNavigator();
const BookingStack = createNativeStackNavigator();
const StoreLocationStack = createNativeStackNavigator();
const VoucherScreenStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    const HomeStackScreen = () => {
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={() => {
                        <Header />;
                    }}
                />
            </HomeStack.Navigator>
        );
    };

    const BookingStackScreen = () => {
        return (
            <BookingStack.Navigator>
                <BookingStack.Screen
                    name="BookingScreen"
                    component={BookingScreen}
                    options={() => {
                        <Header />;
                    }}
                />
                <BookingStack.Screen name="ProductDetail" component={ProductDetail} />
            </BookingStack.Navigator>
        );
    };

    const StoreLocationStackScreen = () => {
        return (
            <StoreLocationStack.Navigator>
                <StoreLocationStack.Screen
                    name="StoreLocation"
                    component={StoreLocationScreen}
                    options={() => {
                        <Header />;
                    }}
                />
                <StoreLocationStack.Screen name="StoreLocationDetails" component={StoreLocationDetail} />
            </StoreLocationStack.Navigator>
        );
    };

    const VoucherStackScreen = () => {
        return (
            <VoucherScreenStack.Navigator>
                <VoucherScreenStack.Screen
                    name="VoucherScreen"
                    component={VoucherScreen}
                    options={() => {
                        <Header />;
                    }}
                />
            </VoucherScreenStack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
                <Tab.Screen
                    name="BookingScreen"
                    component={BookingStackScreen}
                />
                <Tab.Screen
                    name="StoreLocationScreen"
                    component={StoreLocationStackScreen}
                />
                <Tab.Screen
                    name="VoucherScreen"
                    component={VoucherStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
