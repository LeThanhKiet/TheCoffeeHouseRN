import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";

const SignupScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const handleLogin = () => {
        if (password === '' || confirmPassword === '') {
          setError('Vui lòng điền đầy đủ thông tin.');
        } else if (password !== confirmPassword) {
          setError('Mật khẩu và xác nhận mật khẩu không khớp.');
        } else {
          // Xử lý đăng nhập khi mật khẩu và xác nhận mật khẩu hợp lệ
          setError('');
      
          // Gọi hàm xử lý đăng nhập hoặc chuyển hướng đến màn hình chính
          const submit = () => {
            let formData = {
              username: username,
              email: email,
              password: password,
            };
      
            axios.post('https://657de7ca3e3f5b1894635148.mockapi.io/api/user/account', formData)
              .then((response) => {
                console.log(response.data);
                // Sau khi đăng ký thành công, chuyển hướng đến màn hình đăng nhập
                navigation.navigate('Login');
              })
              .catch((err) => console.log(err));
          };
      
          // Gọi hàm submit để thực hiện đăng ký
          submit(); 
        }
      };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Tạo Tài Khoản Mới</Text>
                <Text style={styles.subtitle}>Hãy tạo tài khoản để tiếp tục</Text>
            </View>

            <ScrollView>
                <View style={styles.form}>
                    <View style={styles.input}>
                    <Text style={styles.inputLabel}>Tên người dùng</Text>

                    <TextInput
                        placeholder="Nhập tên người dùng"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    </View>

                    <View style={styles.input}>
                    <Text style={styles.inputLabel}>Email của bạn</Text>

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="abc@gmail.com"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    </View>

                    <View style={styles.input}>
                    <Text style={styles.inputLabel}>Nhập mật khẩu</Text>
                    <TextInput
                        autoCorrect={false}
                        placeholder="Mật khẩu của bạn"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    </View>

                    <View style={styles.input}>
                    <Text style={styles.inputLabel}>Nhập lại mật khẩu</Text>

                    <TextInput
                        autoCorrect={false}
                        placeholder="Mật khẩu của bạn"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                    </View>

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={handleLogin}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Đăng kí</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {error !== '' && <Text style={styles.errorText}>{error}</Text>}

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login')
                        }}>
                        <Text style={styles.formFooter}>
                            Bạn đã có tài khoản?{' '}
                            <Text style={{ textDecorationLine: 'underline' }}>Đăng nhập</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    header: {
        marginVertical: 24,
        paddingHorizontal: 24,
    },
    form: {
        paddingHorizontal: 24,
    },
    formAction: {
        marginVertical: 24,
    },
    formFooter: {
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        textAlign: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1d1d1d',
        marginBottom: 6,
    },
        subtitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#929292',
    },
        input: {
        marginBottom: 16,
    },
        inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
        inputControl: {
        height: 44,
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        backgroundColor: '#007aff',
        borderColor: '#007aff',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    btnText: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '600',
        color: '#fff',
    },
})

export default SignupScreen;
