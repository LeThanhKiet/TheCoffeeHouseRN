import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const WIDTH = Dimensions.get("window").width; // Chiều rộng thiết bị
const HEIGHT = Dimensions.get("window").height; // Chiều cao thiết bị

export default function CodeUser() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ImageBackground source={require("../images/backgroundCodeUser.png")} resizeMode="contain">
                    <View style={styles.addPoint}>
                        <Ionicons name="chevron-down-outline" size={20} color="red" />
                        <Text style={{ color: "red" }}>Tích điểm</Text>
                    </View>
                    <Text style={[styles.codeInfo, { fontSize: 16, fontWeight: "bold" }]}>Kiệt Lê</Text>
                    <Text style={[styles.codeInfo, { marginBottom: 24 }]}>68 BEAN</Text>
                    <View style={styles.code}>
                        <Image
                            source={require("../images/barcode.gif")}
                            style={{ width: 220, height: 40, alignSelf: "center" }}
                        />
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        backgroundColor: "#ff9e00",
        borderRadius: 16,
    },
    addPoint: {
        padding: 8,
        width: 100,
        left: WIDTH * 0.64,
        color: "#fff",
        backgroundColor: "#ff6d00",
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: "#ccc",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: "row",
    },

    codeInfo: {
        marginLeft: 8,
        color: "#fff",
    },

    code: {
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 8,
        backgroundColor: "#fff",
        height: 100,
        borderRadius: 10,
    },
});
