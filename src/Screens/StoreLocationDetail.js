import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

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

                <View style={{ margin: 16 }}>
                    <TouchableOpacity style={styles.info}>
                        <Ionicons name="navigate-outline" size={20} color="#000" style={styles.icon} />
                        <Text style={styles.infoStore} numberOfLines={2} ellipsizeMode="tail">
                            {data?.full_address}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.info}>
                        <Ionicons name="heart-outline" size={20} color="#000" style={styles.icon} />
                        <Text style={styles.infoStore}>Thêm vào danh sách yêu thích</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.info}>
                        <Ionicons name="call" size={20} color="#000" style={styles.icon} />
                        <Text style={styles.infoStore}>Liên hệ: {data?.phone}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.info}>
                        <Ionicons name="arrow-redo-outline" size={20} color="#000" style={styles.icon} />
                        <Text style={styles.infoStore}>Chia sẻ với bạn bè</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.btnName, { fontWeight: "bold" }]}>Đặt sản phẩm</Text>
                    <Text style={styles.btnName}>Tự đến lấy tại cửa hàng này</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({});
