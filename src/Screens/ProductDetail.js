import React, { useEffect } from "react";
import {
    Dimensions,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CheckBox, Icon } from "@rneui/base";

import { useState } from "react";

export default function ProductDetail({ navigation, route }) {
    const { data } = route.params;

    // Số lượng
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => setQuantity(quantity + 1);
    const handleReduce = () => {
        if (quantity === 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    };

    // Tổng tiền
    const [total, setTotal] = useState(data.Price);
    const handleTotal = () => {};

    const optionSize = ["Lớn", "Vừa", "Nhỏ"];
    const [selectedIndex, setSelectedIndex] = useState(1);

    const optionTopping = [
        "Kem Phô Mai Macchiatop",
        "Shot Espresso",
        "Trái Vải",
        "Hạt Sen",
        "Đào Miếng",
        "Trân Châu Trắng",
    ];

    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={{ uri: data?.Image }} style={styles.imageSingle} />
                </View>

                <View style={{ backgroundColor: "#fff", padding: 16 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
                                {data?.Title}
                            </Text>
                            <Text style={styles.price}>{data?.Price} đ</Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Ionicons name="heart-outline" size={24} color="#000" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 12, padding: 16, backgroundColor: "#FFF" }}>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Size</Text>
                    <Text style={{ color: "#767676" }}>Chọn 1 loại size</Text>
                    <View>
                        {optionSize.map((option) => {
                            let productPrice = parseInt(data.Price);
                            console.log(typeof data.Price);
                            console.log(typeof productPrice);

                            let index;
                            if (option === "Lớn") {
                                productPrice = productPrice + 20;
                            } else if (option === "Vừa") {
                                productPrice = productPrice + 10;
                            } else if (option === "Nhỏ") {
                                productPrice = productPrice;
                            }
                            return (
                                <View style={styles.optionTopping}>
                                    <CheckBox
                                        title={option}
                                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                                        size={20}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        checked={selectedIndex === 0}
                                        onPress={() => setSelectedIndex(0)}
                                        checkedColor="#E67904"
                                        containerStyle={{ marginLeft: -10 }}
                                    />
                                    {/* <Text style={styles.toppingTitle}>{option}</Text> */}
                                    <Text style={{ fontSize: 15, fontWeight: "bold", textAlignVertical: "center" }}>
                                        {productPrice}.000đ
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={{ marginTop: 12, padding: 16, backgroundColor: "#FFF" }}>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Topping</Text>
                    <Text style={{ color: "#767676" }}>Chọn tối đa 2 loại</Text>
                    <View>
                        {optionTopping.map((option) => {
                            return (
                                <View style={styles.optionTopping}>
                                    <View style={{ flexDirection: "row", textAlignVertical: "center" }}>
                                        <CheckBox
                                            title={option}
                                            textStyle={{ fontWeight: "bold", fontSize: 15 }}
                                            size={20}
                                            checked={checked}
                                            onPress={toggleCheckbox}
                                            checkedColor="#E67904"
                                            containerStyle={{ marginLeft: -10 }}
                                        />
                                        {/* <Text style={styles.toppingTitle}>{option}</Text> */}
                                    </View>
                                    <Text style={{ fontSize: 15, fontWeight: "bold", textAlignVertical: "center" }}>
                                        10.000đ
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={{ marginTop: 12, padding: 16, backgroundColor: "#FFF" }}>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Yêu cầu khác</Text>
                    <Text style={{ color: "#767676", paddingVertical: 5 }}>Những tùy chọn khác</Text>
                    <TextInput style={styles.input} placeholder="Thêm ghi chú" />
                </View>
                <View
                    style={{
                        marginTop: 12,
                        padding: 16,
                        backgroundColor: "#FFF",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Text style={styles.quantity_btn} onPress={handleReduce}>
                                -
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity_value}>{quantity}</Text>
                        <TouchableOpacity>
                            <Text style={styles.quantity_btn} onPress={handleIncrease}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.add_cart}>Chọn • {total}đ</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f4f4f4",
    },

    imageSingle: {
        width: WIDTH,
        height: WIDTH,
        resizeMode: "contain",
    },

    icon: { top: 10, right: 10 },

    productName: {
        maxWidth: "90%",
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
    },

    price: {
        color: "#767676",
        fontSize: 16,
        fontWeight: "bold",
    },

    optionTopping: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    toppingTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },

    input: {
        marginTop: 10,
        padding: 8,
        height: 40,
        borderWidth: 0.3,
        borderRadius: 8,
    },

    quantity_btn: {
        width: 42,
        height: 42,
        color: "#E67904",
        fontSize: 24,
        backgroundColor: "#fcf7e8",
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 24,
    },

    quantity_value: {
        width: 40,
        height: 40,
        color: "#000",
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 24,
    },

    add_cart: {
        height: 48,
        width: 210,
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFF",
        backgroundColor: "#e67904",
        borderRadius: 8,
    },
});
