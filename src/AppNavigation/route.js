import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// import Screen
import HomeScreen from "../Screens/HomeScreen";
import BookingScreen from "../Screens/BookingScreen";
import StoreLocationScreen from "../Screens/StoreLocationScreen";
import VoucherScreen from "../Screens/VoucherScreen";
import AnyScreen from "../Screens/AnyScreen";

// import Component

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: "tomato", // bấm vào thì cam
                    tabBarInactiveTintColor: "gray", // K bấm thì xám
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Booking") {
                            iconName = focused ? "cafe" : "cafe-outline";
                        } else if (route.name === "Store") {
                            iconName = focused ? "location" : "location-outline";
                        } else if (route.name === "Voucher") {
                            iconName = focused ? "cash" : "cash-outline";
                        } else if (route.name === "Any") {
                            iconName = focused ? "menu" : "menu-outline";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="Home"  component={HomeScreen}></Tab.Screen>
                <Tab.Screen name="Booking" component={BookingScreen}></Tab.Screen>
                <Tab.Screen name="Store" component={StoreLocationScreen}></Tab.Screen>
                <Tab.Screen name="Voucher" component={VoucherScreen}></Tab.Screen>
                <Tab.Screen name="Any"  component={AnyScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}