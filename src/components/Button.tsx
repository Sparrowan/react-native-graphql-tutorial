import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';

type propsTypes = {
    color?: string,
    filled?: boolean,
    title: string,
    style?: StyleProp<ViewStyle>,
    onPress: () => void
}

const Button = (props: propsTypes) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: bgColor }, // Applying backgroundColor directly here
                props.style // Applying additional styles passed via props
            ]}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 18, color: textColor }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Button;
