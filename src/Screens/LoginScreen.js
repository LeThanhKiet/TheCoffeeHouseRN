import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        console.log('Username:', username);
        console.log('Password:', password);
        // Gửi yêu cầu đăng nhập với dữ liệu từ người dùng sử dụng phương thức GET
        axios.get('https://657de7ca3e3f5b1894635148.mockapi.io/api/user/account', {
            params: {
                username: username,
                password: password,
            },
        })
        .then((response) => {
            // Kiểm tra xem đăng nhập thành công hay không
            if (response.data.success) {
                // Xử lý phản hồi từ API khi đăng nhập thành công
                navigation.navigate('SignUp');
            } else {
                setError('Tài khoản hoặc mật khẩu không đúng.');
            }
        })
        .catch((error) => {
            // In ra lỗi nếu có
            console.error('Đăng nhập thất bại:', error);
            setError('Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập.');
        });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Đăng Nhập</Text>
                    <Text style={styles.subtitle}>Hãy đăng nhập tài khoản của bạn</Text>
                </View>

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
                        <Text style={styles.inputLabel}>Mật khẩu</Text>

                        <TextInput
                            placeholder="Nhập mật khẩu của bạn"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    {error !== '' && <Text style={styles.errorText}>{error}</Text>}
                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={handleLogin}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignUp')
                        }}>
                        <Text style={styles.formFooter}>
                            Bạn chưa có tài khoản?{' '}
                            <Text style={{ textDecorationLine: 'underline' }}>Đăng kí</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    header: {
        marginVertical: 36,
    },
    form: {
        marginBottom: 24,
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
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1d1d1d',
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
        textAlign: 'center',
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
    btnText: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '600',
        color: '#fff',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
});

export default LoginScreen;
