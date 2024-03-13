import { View, Text, Image, Pressable, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import SocialAuthButton from '../../components/SocialAuthButton';

const LoginScreen = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.mainContainer}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={styles.welcomeText}>
                        Hi Welcome Back ! 👋
                    </Text>

                    <Text style={styles.helloText}>Hello again you have been missed!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={styles.inputLabels}>Email address</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={styles.inputLabels}>Password</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.rememberMeContainer}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>Remenber Me</Text>
                </View>

                <Button
                    title="Login"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={() => { }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Login with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <SocialAuthButton onPress={() => { }} text='Facebook' imgSrc={require("../../../assets/social/facebook.png")} />

                    <SocialAuthButton onPress={() => { }} text='Google' imgSrc={require("../../../assets/social/google.png")} />
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => { }}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    safeAreaView: { flex: 1, backgroundColor: COLORS.white },
    mainContainer: { flex: 1, marginHorizontal: 22, marginVertical: 50 },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 12,
        color: COLORS.black
    },
    helloText: {
        fontSize: 16,
        color: COLORS.black
    },
    inputLabels: {
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 8
    },
    inputContainer: {
        width: "100%",
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        marginVertical: 6
    }

})