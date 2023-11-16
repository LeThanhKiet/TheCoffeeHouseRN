import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StyleSheet } from 'react-native'


import Ionicons from "react-native-vector-icons/Ionicons";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AnyScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Tiện ích</Text>
                    <View>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <TouchableOpacity style={[styles.btnExt, styles.ext, {marginRight: 4}]}>
                                <Image source={require('../images/icon_paper.png')} style={styles.imgExt} />
                                <Text style={styles.extInfo}>Lịch sử đơn hàng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnExt, styles.ext, {marginLeft: 4}]}>
                                <Image source={require('../images/icon_document.png')}  style={styles.imgExt} />
                                <Text style={styles.extInfo}>Điều khoản</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={[styles.btnExt, styles.ext, {marginRight: 4}]}>
                                <Image source={require('../images/icon_music.png')}  style={styles.imgExt} />
                                <Text style={styles.extInfo}>Nhạc đang phát</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnExt, styles.ext, {marginLeft: 4}]}>
                                <Image source={require('../images/icon_document.png')}  style={styles.imgExt} />
                                <Text style={styles.extInfo}>Điều khoản VNPay</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    <Text style={styles.title}>Hỗ trợ</Text>
                    <View style={styles.btnGroup}>
                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="star-outline" size={18} color="#000"  />
                                <Text style={styles.btnInfo}>Đánh giá đơn hàng</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="chatbox-outline" size={18} color="#000" />
                                <Text style={styles.btnInfo}>Liên hệ và góp ý</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="reader-outline" size={18} color="#000" />
                                <Text style={styles.btnInfo}>Hướng dẫn xuất hóa đơn GTGT</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                    </View>

                    <Text style={styles.title}>Tài khoản</Text>

                    <View style={styles.btnGroup}>
                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="person-outline" size={18} color="#000" />
                                <Text style={styles.btnInfo}>Thông tin cá nhân</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>

                        <View style={styles.line}></View>

                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="bookmark-outline" size={18} color="#000" />
                                <Text style={styles.btnInfo}>Địa chỉ đã lưu</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                        
                        <View style={styles.line}></View>

                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="settings-outline" size={18} color="#000" />
                                <Text style={styles.btnInfo}>Cài đặt</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                        
                        <View style={styles.line}></View>

                        <TouchableOpacity
                        // onPress={onLogin}
                        style={styles.btnItem}
                        >
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="log-out-outline" size={18} color="#000" />
                                <Text style={styles.btnInfo}>Đăng xuất</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: '#EEE',
    },
    title: {
        marginVertical: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    ext: {
        width: WIDTH*0.455,
    },
    btnExt: {
        padding: 16,
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    extInfo: {
        marginTop: 8,
        color: '#000', 
        fontWeight: 'bold'
    },
    imgExt: {
        width: 20,
        height: 20,
    },
    btnGroup: {
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    btnItem: {
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnInfo: {
        fontWeight: '500',
        marginHorizontal: 16,
        color: '#000'
    },
    line: {
        backgroundColor: '#EEE',
        borderBottomWidth: 0.25,
        marginLeft: 16,
    },
    test: {
        height: HEIGHT*2.08
    }
})

export default AnyScreen;
