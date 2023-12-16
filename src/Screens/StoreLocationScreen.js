import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import axios from "axios";
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";

export default function StoreLocationScreen({ item, index }) {
    const navigation = useNavigation();
    const moveToStoreLocationDetail = (item) => () => navigation.navigate("StoreLocationDetail", { data: item });

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://api.thecoffeehouse.com/api/v5/stores/all")
            .then(({ data }) => {
                console.log("data ", data.stores);
                setData(data.stores);
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, []);

    const ListHeader = () => {
        return (
            <View>
                <View style={{ backgroundColor: "#fff", flexDirection: "row" }}>
                    <View>
                        <Ionicons name="search-outline" size={20} color="#000" style={styles.icon} />
                        <TextInput style={styles.input} placeholder="Tìm kiếm" />
                    </View>
                    <TouchableOpacity style={styles.btnMap}>
                        <Ionicons name="map-outline" size={20} color="#000" style={styles.iconMap} />
                        <Text style={styles.txtMap}>Bản đồ</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleContent}>Các cửa hàng khác</Text>
            </View>
        );
    };

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={moveToStoreLocationDetail(item)} style={styles.locationtItem}>
                    <Image style={styles.locationImages} source={{ uri: item?.images[0] }} />
                    <View style={styles.locationInfo}>
                        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                            {item.name}
                        </Text>
                        <Text style={styles.location} numberOfLines={2} ellipsizeMode="tail">
                            {item?.full_address}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    ListHeaderComponent={ListHeader}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    input: {
        paddingLeft: 42,
        marginBottom: 16,
        marginHorizontal: 16,
        width: WIDTH * 0.7,
        height: 40,
        backgroundColor: "#EEE",
        borderRadius: 10,
    },

    icon: {
        top: 30,
        left: 30,
        zIndex: 1,
    },

    btnMap: {
        padding: 16,
        flexDirection: "row",
        top: 15,
        left: -15,
    },

    txtMap: {
        margin: 2,
        paddingLeft: 5,
        color: "#000",
        fontWeight: "bold",
    },

    titleContent: {
        marginTop: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
    },

    locationtItem: {
        marginHorizontal: 16,
        marginBottom: 5,
        padding: 16,
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 10,
    },

    locationImages: {
        width: WIDTH * 0.2,
        height: WIDTH * 0.2,
        borderRadius: 8,
    },

    locationInfo: {
        marginHorizontal: 16,
    },

    name: {
        width: WIDTH * 0.6,
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: "bold",
    },

    location: {
        marginBottom: 5,
        width: WIDTH * 0.6,
        color: "#000",
        fontSize: 16,
    },
});
