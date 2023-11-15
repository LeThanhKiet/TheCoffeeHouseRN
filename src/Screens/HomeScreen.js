import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import CodeUser from "../Components/CodeUser";

const WIDTH = Dimensions.get("window").width; // Chiều rộng thiết bị

const HomeScreen = ({ navigation }) => {
    const onPressBooking = () => navigation.navigate("Booking");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={require("../images/backgroundContent.png")}
                    style={{ backgroundColor: "#e9d8a6" }}
                    resizeMode="repeat"
                >
                    <CodeUser />
                    <View style={{ backgroundColor: "#eee" }}>
                        <View style={styles.content}>
                            <View style={styles.scroll}></View>
                            <View style={styles.option}>
                                <TouchableOpacity>
                                    <Image source={require("../images/shipping_icon.jpg")} />
                                    <Text>Giao hàng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 24,
    },

    scroll: {
        backgroundColor: "#DDD",
        margin: 8,
        alignSelf: "center",
        width: WIDTH * 0.12,
        height: 6,
        borderRadius: 8,
    },

    option: {
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 8,
        marginHorizontal: 16,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default HomeScreen;
