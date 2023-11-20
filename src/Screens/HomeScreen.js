import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import CodeUser from "../Components/CodeUser";
import Banners from "../Components/Banners";
import BannerList from "../Components/BannerList";

const WIDTH = Dimensions.get("window").width; // Chiều rộng thiết bị

const HomeScreen = ({ navigation }) => {
    const onPressBooking = () => navigation.navigate("Booking");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.headerText}>Xin chào! Cà Phê đi!</Text>
                <Ionicons name="notifications-outline" size={25} style={styles.headerIcon}/>
                
            </View>
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
                                    <Image 
                                        style={styles.imgOption}
                                        source={require("../images/shipping_iconn.png")} />
                                    <Text style={{fontWeight: '600'}}>Giao hàng</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image 
                                        style={styles.imgOption}
                                        source={require("../images/bring_icon.png")} />
                                    <Text style={{fontWeight: '600'}}>Mang đi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image 
                                        style={styles.imgOption}
                                        source={require("../images/bean.png")} />
                                    <Text style={{fontWeight: '600'}}>Đổi bean</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image 
                                        style={styles.imgOption}
                                        source={require("../images/gift.png")} />
                                    <Text style={{fontWeight: '600'}}>Quà tặng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View>
                    <Banners/>
                </View>
                <Text style={styles.titleDiscovery}>Khám phá thêm </Text>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.swipeBtnDiscovery}>
                            <TouchableOpacity>
                                <Text style={[styles.btnDiscovery, styles.activeBtnDiscovery]}>Ưu đãi đặc biệt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.btnDiscovery}>Cập nhật từ nhà</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.btnDiscovery}>#CoffeeLover</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.btnDiscovery}>Quà tặng từ nhà</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View><BannerList/></View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    headerIcon: {
        marginRight: 30,

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
        marginHorizontal: 10,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-around",

    },
    imgOption: {
        height: 70, 
        width: 70,
    },

    titleDiscovery: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 15,
    },
    swipeBtnDiscovery: {
        flexDirection: 'row', 
        marginLeft: 15, 
        marginRight: 10,
    },
    btnDiscovery: {
        paddingRight: 15,
        color: '#000',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 17,
        padding: 5,
    },
    activeBtnDiscovery: {
        color: '#FF7900',
        backgroundColor: '#EEE',
        borderRadius: 20,
    },
});

export default HomeScreen;
