import React, {useEffect, useState} from 'react'
import { Image, FlatList, View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import axios from 'axios'



const voucherList = [
    {
        id: 1,
        photo: 'https://minio.thecoffeehouse.com/image/admin/storage/1159_m1t1-v1.jpg',
        title: 'Mua 1 tặng 1 đơn Delivery ',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 2,
        photo: 'https://minio.thecoffeehouse.com/image/admin/storage/852__C4_90o_CC_82_CC_80ng-gia_CC_81-29K_coupon.jpg',
        title: 'Đồng giá 29k Caramel Macchiato Đá (M)',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 3,
        photo: 'https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg',
        title: 'Ưu đãi 30% (tối đa 35k) đơn từ 2 món bất kỳ',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 4,
        photo: 'https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg',
        title: 'Ưu đãi 20% đơn Pickup 2 món bất kỳ',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 5,
        photo: 'https://minio.thecoffeehouse.com/image/admin/CPSD289Kcoupou-all_285104.jpg',
        title: 'Giảm giá Thùng Cà phê sữa đá 289,000',
        date: 'Hết hạn 31/10/2021'
    },
]

export default function test() {

    const navigation = useNavigation()
    const moveToCodeUsers = () => () => navigation.navigate('CodeUsers')

    const [data, useData] = useState([]);
    const [isLoading, useIsLoading] = useState(true);
    // useEffect(() => {
    //     axios.post('https://api.thecoffeehouse.com/api/v5/coupon/dashboard',
    //     {"body":data},
    //     {
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             'TCH-DEVICE-ID': '7054bf0b-3da3-43ac-b568-7077e92d717f',
    //             'TCH-APP-VERSION': '5.3.0'
    //           },
    //     })
    //       .then(({ data }) => {
    //         console.log("data", data.results)
    //         useData(data.results)
    //       })
    //       .catch((error) => console.error(error))
    //       .finally(() => useIsLoading(false));
    //   }, []);
    
    const ListHeader = () => (
        <View>
            <View style={styles.codeView}>
                <TouchableOpacity
                onPress={moveToCodeUsers}
                >
                    <CodeUsers/>
                </TouchableOpacity>
            </View>

            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btnItem}>
                    <Ionicons name="gift-outline" size={16} color="#FF3300" />
                    <Text style={styles.btnInfo}>Đổi ưu đãi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnItem}>
                    <Ionicons name="cash-outline" size={16} color="#FF3300" />
                    <Text style={styles.btnInfo}>Voucher của bạn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnItem}>
                    <Ionicons name="card-outline" size={16} color="#FF3300" />
                    <Text style={styles.btnInfo}>Lịch sử BEAN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnItem}>
                    <Ionicons name="shield-checkmark-outline" size={16} color="#3366CC" />
                    <Text style={styles.btnInfo}>Quyền lợi của bạn</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.titleContent}>Phiếu ưu đãi của bạn</Text>
                <TouchableOpacity>
                    <Text  style={styles.btnMore}>Xem tất cả</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.voucher}>
                <Image
                style={styles.voucherImages}
                source={{ uri: item?.photo }}
                />
                <View style={{justifyContent: 'space-between'}}>
                    <Text 
                    style={styles.voucherInfo}
                    numberOfLines={2}
                    ellipsizeMode = 'tail'
                    >{item?.title}</Text>
                    <Text style={styles.voucherInfo}>{item?.date}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView>
            <View style={{backgroundColor: '#EEE'}}>

                <View>
                    <FlatList
                        ListHeaderComponent={ListHeader}
                        data={voucherList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        style={{ marginBottom: 10 }}
                    />
                </View>

                {/* <View style={styles.content}>
                    <Text style={styles.titleContent}>Đổi ưu đãi</Text>
                    <TouchableOpacity>
                        <Text  style={styles.btnMore}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <EndowList/>
                </View> */}

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    codeView: {
        marginHorizontal: 16,
        marginVertical: 16,
        backgroundColor: '#FFF',
        borderRadius: 16,
    },
    btnGroup: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnItem: {
        margin: 4,
        padding: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    btnInfo: {
        marginTop: 8,
        color: '#000',
        fontWeight: 'bold',
    },
    content: {
        marginHorizontal: 16, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    titleContent: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnMore: {
        padding: 8,
        backgroundColor: '#E7DAC9',
        color: '#FF6600',
        fontWeight: 'bold',
        borderRadius: 36,
    },
    voucher: {
        marginVertical: 4,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    stylevoucher: {
        marginHorizontal: 16,
        marginVertical: 4,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#FFF'
    },
    voucherInfo: {
        marginHorizontal: 16,
        fontSize: 16,
        color: '#000', 
    },
    voucherImages: {
        borderRadius: 4,
    }
})