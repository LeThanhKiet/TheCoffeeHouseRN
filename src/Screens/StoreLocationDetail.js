import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoreLocationDetail({ route, navigation }) {
    const { data } = route.params;

    return (
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
            <ScrollView>
                <View style={styles.thumbnail}>
                    <Image source={{ uri: data?.images[0] }} style={styles.image} />
                </View>

                <View style={styles.title}>
                    <Text style={styles.name}>{data?.pu_city}</Text>
                    <Text style={styles.store}>{data?.name}</Text>
                    <Text style={{ fontSize: 12 }}>Giờ mở cửa: {data?.open_time}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({});
