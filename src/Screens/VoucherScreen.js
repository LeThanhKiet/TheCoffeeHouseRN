import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import CodeUser from "../Components/CodeUser";

const VoucherScreen = () => {
    const data = require("../Data/voucher.json")

    const renderVoucher = ({item}) => {
        return (
            <TouchableOpacity style={styles.voucher}>
                <Image
                    style={styles.voucherImages}
                    source={{ uri: item.photo }}
                />
                <View style={{justifyContent: 'space-between'}}>
                    <Text 
                        style={styles.voucherInfo}
                        numberOfLines={2}
                    >
                        {item.title}</Text>
                    <Text style={styles.voucherInfo}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{backgroundColor: '#E6CCB1'}}>
            <View style={styles.Header}>
                <Text style={styles.headerText}>Ưu đãi</Text>
                <Ionicons name="notifications-outline" size={25} style={styles.headerIcon}/>
            </View>
            <ScrollView>
                <CodeUser/>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.btnItem}>
                        <Ionicons name="gift-outline" size={25} color="#FF3300" />
                        <Text style={styles.btnInfo}>Đổi ưu đãi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnItem}>
                        <Ionicons name="cash-outline" size={25} color="#FF3300" />
                        <Text style={styles.btnInfo}>Voucher của bạn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnItem}>
                        <Ionicons name="card-outline" size={25} color="#FF3300" />
                        <Text style={styles.btnInfo}>Lịch sử BEAN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnItem}>
                        <Ionicons name="shield-checkmark-outline" size={25} color="#3366CC" />
                        <Text style={styles.btnInfo}>Quyền lợi của bạn</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.titleContent}>Phiếu ưu đãi của bạn</Text>
                    <TouchableOpacity>
                        <Text style={styles.btnMore}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom: 40 }}>
                    <FlatList 
                        data={data.voucherList}
                        renderItem={renderVoucher}
                    />
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
    btnGroup: {
        paddingLeft: 15,
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnItem: {
        margin: 4,
        padding: 15,
        width: 170,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    btnInfo: {
        marginTop: 8,
        color: '#000',
        fontWeight: 'bold',
    }, 
    content: {
        margin: 12,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    titleContent: {
        color: '#000',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 5,
    },
    btnMore: {
        padding: 10,
        backgroundColor: '#E7DAC9',
        color: '#FF6600',
        fontWeight: 'bold',
        borderRadius: 40,
    }, 
    voucher: {
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    
    voucherInfo: {
        marginRight: 16,
        fontSize: 16,
        fontWeight: '500',
        width: 200,
    },
    voucherImages: {
        width: 65,
        height: 65,
        borderRadius: 4,
    }
})

export default VoucherScreen;
