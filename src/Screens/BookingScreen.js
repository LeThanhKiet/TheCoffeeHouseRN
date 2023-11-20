import React from "react";
import { FlatList, Image, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {useState} from "react";



const BookingScreen = ({navigation}) => {
    
    const data = require('../Data/HiTea.json')
    // const [title, settitle] = useState('')
    // const [image, setimage] = useState('')
    // const [price, setprice] = useState('')


    const renderHiTea = ({item, index}) => {
        return (
            <TouchableOpacity 
                key={index}
                onPress={() => {navigation.navigate("ProductDetail"); }}
                style={styles.list}>
                <View >
                    <Image 
                        style={styles.ImgProduct}
                       
                        source={{uri: item.Image}}/>
                </View>
                <View style={styles.about}>
                    <Text style={styles.Title}
                        >{ item.Title}
                    </Text>
                    <Text style={styles.Price}>{ item.Price}</Text>
                </View>
                <View >
                    <Ionicons name="add-circle-outline" size={35} style={styles.Icon}/>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerText}>Danh Mục</Text>
                    <Ionicons name="chevron-down-outline" size={18} style={{marginTop: 5}}/>
                </View>
                <View style={styles.headerRight}>
                    <Ionicons name="search-outline" size={20} style={{marginTop: 5}}/>
                    <Ionicons name="heart-outline" size={20} style={{marginTop: 5}}/>
                </View>
            </View>
            <View style={styles.line}></View>
            <ScrollView>
                <View>
                    <View style={styles.category}>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={require('../images/mon_phai_thu.png')}
                            />
                            <Text style={styles.categoryText}>Món mới phải thử</Text>
                        </View>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={require('../images/ic-tra-trai-cay.png')}
                            />
                            <Text style={styles.categoryText}>Trà trái cây - HiTea</Text>
                        </View>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={require('../images/cloudtea.png')}
                            />
                            <Text style={styles.categoryText}>Trà sữa - CloudTea</Text>
                        </View>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={require('../images/cloudtea.png')}
                            />
                            <Text style={styles.categoryText}>Trà xanh - Chocolate</Text>
                        </View>
                    </View>
                    <View style={styles.category}>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={require('../images/caphe.png')}
                            />
                            <Text style={styles.categoryText}>Đá xay Frosty</Text>
                        </View>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={require('../images/frosty.png')}
                            />
                            <Text style={styles.categoryText}>Cà phê - CloudFee</Text>
                        </View>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={require('../images/banhngot.png')}
                            />
                            <Text style={styles.categoryText}>Bánh ngọt</Text>
                        </View>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={require('../images/banhman.png')}
                            />
                            <Text style={styles.categoryText}>Bánh mặn</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.HiTea}>
                    <Text style={styles.text}>Cà Phê - CloudFee</Text>
                    <View style={styles.product}>
                    <FlatList 
                        data={data.Coffee}
                        renderItem={renderHiTea}
                    />
                    </View>
                </View>

                <View style={styles.HiTea}>
                    <Text style={styles.text}>Trà Trái Cây - HiTea</Text>
                    <View style={styles.product}>
                    <FlatList 
                        data={data.HiTea}
                        renderItem={renderHiTea}
                    />
                    </View>
                </View>

                <View style={styles.HiTea}>
                    <Text style={styles.text}>Trà Sữa - CloudTea</Text>
                    <View style={styles.product}>
                    <FlatList 
                        data={data.TraSua_CloudTea}
                        renderItem={renderHiTea}
                    />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 30,
        width: 50,
        justifyContent: 'space-between'
    },
    line: {
        backgroundColor: '#9A9C9E',
        borderBottomWidth: 0.25,
        marginTop: 10,
    },
    
    category: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginBottom: 10,
    },
    categoryItem: {
        flex: 2.5,
        marginTop: 5,
    },
    
    Img: {
        width: 76,
        height: 75,
        borderRadius: 50,
    },
    categoryText: {
        width: 75,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14,
    },
    text: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
    },
    ImgProduct: {
        flex: 4,
        borderRadius: 15,
        height: 120,
        width: 130,
    },
    about: {
        flex: 4,
        marginTop: 10,
        marginLeft: 20,
        
    },
    Title: {
        fontSize: 16,
        fontWeight: '600',
    },
    Price: {
        fontSize: 16,
        fontWeight: '400',
    },
    Icon: {
        flex: 1,
        marginRight: 20,
        marginTop: 40,
        color: '#fa8c16',
    },
})

export default BookingScreen;


