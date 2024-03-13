import { View, Text, Image, Pressable, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../constants/colors';
import Checkbox from "expo-checkbox"
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import SocialAuthButton from '../../components/SocialAuthButton';
import RHFTextInput from '../../components/RHFTextInput';
import RHFPaswordInput from '../../components/RHFPaswordInput';

const LoginScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.mainContainer}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={styles.welcomeText}>
                        Login
                    </Text>
                </View>

                <RHFTextInput label='Email Address' placeholder='Enter your email address' keyboardType='email-address' />
                <RHFPaswordInput label='Password' placeholder='Enter your password' />

                <View style={styles.rememberMeContainer}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>Remember Me</Text>
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
        color: COLORS.black,
        textAlign: 'center'
    },
    helloText: {
        fontSize: 16,
        color: COLORS.black
    },
    rememberMeContainer: {
        flexDirection: 'row',
        marginVertical: 6
    }

})