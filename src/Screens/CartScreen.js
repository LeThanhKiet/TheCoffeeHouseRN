import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../Redux/Slice/CartSlice";

export default function CartScreen({ navigation }) {
    const cartItems = useSelector(selectCartItems);

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, textAlignVertical: "center", color: "#767676", fontWeight: "bold" }}>
                        Xóa
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "bold", textAlignVertical: "center", color: "#000" }}>
                    Xác nhận đơn hàng
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={28} color="#000" style={styles.closeIcon} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.headerContent}>
                        <Text style={styles.titleContent}>Tự đến lấy hàng</Text>
                        <TouchableOpacity>
                            <Text style={styles.btnContent}>Thay đổi</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Ionicons name="chevron-forward-outline" size={20} color="#000" style={styles.rightArrow} />
                        <Text style={styles.address}>Vincom Mega Mall Smart City Tây Mỗ</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                    <View>
                        <TouchableOpacity style={{ textAlignVertical: "center" }}>
                            <Text style={{ color: "#767676", fontSize: 16 }}>15 - 30 phút</Text>
                            <Text style={{ color: "#000", fontSize: 16 }}>Càng sớm càng tốt</Text>
                            <Ionicons
                                name="chevron-forward-outline"
                                size={20}
                                color="#000"
                                style={[styles.rightArrow, { top: -24 }]}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.headerContent}>
                        <Text style={styles.titleContent}>Sảm phẩm đã chọn</Text>
                        <TouchableOpacity>
                            <Text style={styles.btnContent}>+ Thêm</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={{ marginTop: 16, flexDirection: "row", justifyContent: "space-between" }}
                        >
                            {/* <View style={{ flexDirection: "row" }}>
                                <Ionicons name="pencil-outline" size={24} color="#FF7900" />
                                <View style={{ marginLeft: 16 }}>
                                    <Text style={styles.price}>x3 Bạc Sỉu</Text>
                                    <Text style={styles.price}>Lớn</Text>
                                </View>
                            </View>
                            <Text style={styles.price}>35.000đ</Text> */}
                            {/* {cartItems.map((item) => (
                                <View key={item.id} style={{ flexDirection: "row" }}>
                                    <Ionicons name="pencil-outline" size={24} color="#FF7900" />
                                    <View style={{ marginLeft: 16 }}>
                                        <Text style={styles.price}>x3 Bạc Sỉu</Text>
                                        <Text style={styles.price}>Lớn</Text>
                                    </View>
                                </View>
                            ))} */}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={styles.titleContent}>Tổng cộng</Text>
                    <View>
                        <View style={{ paddingVertical: 16, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.price}>Thành tiền</Text>
                            <Text style={styles.price}>125.000đ</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{ paddingVertical: 16, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.price}>Phí giao hàng</Text>
                            <Text style={styles.price}>0đ</Text>
                        </View>
                        <View style={styles.line}></View>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward-outline" size={20} color="#000" style={styles.rightArrow} />
                            <Text style={styles.select}>Chọn khuyến mãi/đổi bean</Text>
                        </TouchableOpacity>
                        <View style={styles.line}></View>
                        <View style={{ paddingVertical: 16, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Số tiền thanh toán</Text>
                            <Text style={{ fontWeight: "bold" }}>125.000đ</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.contentTT}>
                    <Text style={styles.titleContent}>Thanh toán</Text>
                    <TouchableOpacity>
                        <Ionicons name="chevron-forward-outline" size={20} color="#000" style={styles.rightArrow} />
                        <Text style={styles.select}>Chọn phương thức thanh toán</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.infoBooking}>
                <View>
                    <Text style={styles.txtBooking}>Tự đến lấy • 3 sản phẩm</Text>
                    <Text style={styles.totalPrice}>125.000đ</Text>
                </View>

                <TouchableOpacity>
                    <Text style={styles.btnBooking}>đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    closeIcon: {
        color: "#000",
        textAlign: "center",
        textAlignVertical: "center",
        marginRight: 10,
    },

    content: {
        marginTop: 16,
        padding: 16,
        backgroundColor: "#FFF",
    },

    contentTT: {
        marginTop: 16,
        marginBottom: 150,
        padding: 16,
        backgroundColor: "#FFF",
    },

    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    titleContent: {
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
    },

    btnContent: {
        padding: 6,
        paddingHorizontal: 16,
        color: "#FF7900",
        backgroundColor: "#fdf2dd",
        fontWeight: "bold",
        borderRadius: 16,
    },

    rightArrow: {
        top: 21,
        alignSelf: "flex-end",
    },

    address: {
        color: "#000",
        fontSize: 16,
        width: WIDTH * 0.8,
    },

    line: {
        marginTop: 16,
        backgroundColor: "#CCC",
        width: WIDTH,
        height: 1,
    },

    price: {
        fontSize: 16,
    },

    select: {
        color: "#0030EE",
        fontSize: 16,
    },

    infoBooking: {
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FF7900",
        position: "absolute",
        marginTop: 650,
        width: "100%",
        borderRadius: 5,
    },
    txtBooking: {
        color: "#FFF",
        fontSize: 16,
    },
    totalPrice: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    btnBooking: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: "#FFF",
        color: "#FF7900",
        textTransform: "uppercase",
        fontWeight: "bold",
        borderRadius: 24,
    },
});
