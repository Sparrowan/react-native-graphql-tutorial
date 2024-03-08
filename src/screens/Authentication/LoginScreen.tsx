import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const LoginScreen = () => {
    const clearItem = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnBoarding')
        } catch (e) {
            console.log('Remove item error', e)
            // remove error
        }

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={clearItem}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})