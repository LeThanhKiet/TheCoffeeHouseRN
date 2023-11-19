import React from "react";
import { FlatList, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import {useEffect, useState} from 'react'



const BookingScreen = () => {
    const listCategory = require('../Data/menu.json')

    const renderCategory = ({item, index}) => {
        return (
            <SafeAreaView>
                <View style={styles.row}>
                    <View style={styles.category}>
                        <View style={styles.categoryItem}>
                            <Image 
                                style={styles.Img}
                                source={{uri: item.Poster}}/>
                            <Text style={styles.categoryText}>{ item.Title }</Text>
                        </View>
                        
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView>
                <FlatList 
                    data={listCategory.Search}
                    renderItem={renderCategory}
                />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    // row: {
    //     display: 'flex',
    //     flexDirection: 'row',
    // },
    category: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryItem: {
        flex: 2,
    },
    Img: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 1,
    },
    categoryText: {
        width: 80,
        textAlign: 'center',
        fontWeight: '500',
    }
})

export default BookingScreen;


