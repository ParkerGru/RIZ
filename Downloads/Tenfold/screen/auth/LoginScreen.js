import React, { useEffect, useState, createRef } from 'react';
import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity, Alert, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {
    return (
        // <SafeAreaView style={{ flex: 1 }}>
            <View style={ styles.container }>
                {/* <View style={ styles.loginLogo }>
                </View> */}
                <View style={styles.logoBack}>
                    <ImageBackground style={styles.loginLogo} source={require('../../assets/images/logo_back.png')} resizeMode="cover"  >
                        <Image style={styles.logoStyle} resizeMode='contain' source={require('../../assets/images/login_logo.png')} />
                    </ImageBackground>
                </View>
                <View style={ styles.loginBar }>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Welcome black!</Text>
                        <Text style={styles.subtitleText}>Enter your details or continue with Google, Facebook or Apple ID</Text>
                    </View>
                    <View style={styles.loginInput}>
                        <View style={styles.emailInput}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.inputStyle}
                                // defaultValue={ Email }
                                // onChangeText={(val) => setEmail(val)}
                                placeholder="Enter or username"
                                placeholderTextColor={'#7A7A7A'}
                                autoCapitalize='none'
                                keyboardType='email-address'
                            />
                        </View>
                        <View style={styles.emailInput}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.inputStyle}
                                // defaultValue={ Password }
                                // onChangeText={(val) => setPassword(val)}
                                placeholder="Password"
                                placeholderTextColor={'#7A7A7A'}
                                autoCapitalize='none'
                                keyboardType='default'
                                secureTextEntry={true}
                            />
                        </View>
                        <Text style={styles.forgetPasswordText}>Forget password?</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>

                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                style={styles.loginButton}
                                activeOpacity={0.6}
                                onPress={() => navigation.navigate('HomeScreen') }
                            >
                                <Text style={styles.label}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity
                                style={styles.socialButton}
                                activeOpacity={0.6}
                                onPress={() => Alert.alert('Info', 'Clicked login button') }
                            >
                                <FontAwesome name='google' style={{ color: 'white' }} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.socialButton}
                                activeOpacity={0.6}
                                onPress={() => Alert.alert('Info', 'Clicked login button') }
                            >
                                <FontAwesome name='apple' style={{ color: 'white' }} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.socialButton}
                                activeOpacity={0.6}
                                onPress={() => Alert.alert('Info', 'Clicked login button') }
                            >
                                <FontAwesome name='facebook' style={{ color: 'white' }} size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lineStyle}>
                            <View style={styles.line}></View>
                            <Text style={{color: '#7A7A7A'}}>OR</Text>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                style={styles.createButton}
                                activeOpacity={0.6}
                                onPress={() => navigation.navigate('RegisterScreen') }
                            >
                                <Text style={styles.createButtonText}>Create an account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        // </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0B0F'
    },
    logoBack: {
        flex: 1,
    },
    loginLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        // borderWidth: 1,
        width: '80%'
    },
    loginBar: {
        flex: 3,
        backgroundColor: '#232126',
        padding: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        marginTop: 20
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 27,
        textAlign: 'center'
    },
    subtitleText: {
        color: '#7A7A7A',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21.6,
        textAlign: 'center'
    },
    emailInput: {
        marginTop: 20
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#7A7A7A',
        borderRadius: 8,
        height: 50,
        padding: 10,
        marginTop: 10,
        color: 'white'
    },
    label: {
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 19
    },
    forgetPasswordText: {
        color: 'white',
        textAlign: 'right',
        marginTop: 10,
    },
    loginButton: {
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#502380',
        borderRadius: 8,
        marginTop: 20
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // marginTop: 20
    },
    createButton: {
        borderWidth: 1,
        borderColor: '#7A7A7A',
        borderRadius: 8,
        height: 50,
        padding: 15,
        // marginTop: 10
    },
    createButtonText: {
        textAlign: 'center',
        color: '#7A7A7A'
    },
    socialButton: {
        width: '25%',
        height: 40,
        borderWidth: 1,
        borderColor: '#7A7A7A',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lineStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    line: {
        width: '25%',
        height: 1,
        borderBottomColor: '#7A7A7A',
        borderBottomWidth: 1
    }
});