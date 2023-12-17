import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
        navigation.navigate('Login'); // Thay 'LoginScreen' bằng tên màn hình đăng nhập của bạn
        }, 3000); // 3000 milliseconds = 3 seconds

        return () => clearTimeout(timeout); // Clear timeout nếu component bị unmounted
    }, [navigation]);


    return (
        <View style={styles.container}>
            <Image source={require("../images/logo.png")} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 280,
        height: 280,
        resizeMode: 'contain',
    },

});

export default StartScreen;