import React from "react";
import { Dimensions, View, Image, StyleSheet } from "react-native";

import Swiper from "react-native-swiper";

export default function Banners() {
    return (
        <View style={styles.container}>
            <Swiper
                style={styles.wrapper}
                height={240}
                dot={
                    <View
                        style={{
                            backgroundColor: "gray",
                            width: 20,
                            height: 3,
                            borderRadius: 4,
                            margin: 3,
                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            backgroundColor: "#FFF",
                            width: 20,
                            height: 3,
                            borderRadius: 4,
                            margin: 3,
                        }}
                    />
                }
                paginationStyle={{
                    bottom: 15,
                }}
                
            >
                <View style={styles.slide}>
                    <Image resizeMode="stretch" style={styles.image} source={require("../images/banner-1.jpg")} />
                </View>

                <View style={styles.slide}>
                    <Image resizeMode="stretch" style={styles.image} source={require("../images/banner-2.jpg")} />
                </View>

                <View style={styles.slide}>
                    <Image resizeMode="stretch" style={styles.image} source={require("../images/banner-3.jpg")} />
                </View>

                <View style={styles.slide}>
                    <Image resizeMode="stretch" style={styles.image} source={require("../images/banner-4.jpg")} />
                </View>

                <View style={styles.slide}>
                    <Image resizeMode="stretch" style={styles.image} source={require("../images/banner-5.jpg")} />
                </View>
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderRadius: 8,
        // shadowColor: "#AAA",
        // shadowOpacity: 0.4,
    },
    image: {
        width: "92%",
        height: 220,
        borderRadius: 8,
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
