import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import COLORS from '.././constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { Control, Controller, useFormContext } from 'react-hook-form';



type propsTypes = {
    label: string,
    placeholder: string,
    name: string,
    control: any,
    rules: {},
    error: {
        message?: string | undefined;
        ref?: { name: string } | undefined;
        type?: string | undefined;
    } | undefined
}
const RHFPaswordInput = (props: propsTypes) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return (
        <Controller
            control={props.control}
            name={props.name}
            rules={props.rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={{ marginBottom: 12 }}>
                        <Text style={styles.inputLabels}>{props.label}</Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder={props.placeholder}
                                placeholderTextColor={COLORS.black}
                                secureTextEntry={isPasswordShown}
                                style={{
                                    width: "100%",
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
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    )
}

export default RHFPaswordInput

const styles = StyleSheet.create({
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
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
    },
})