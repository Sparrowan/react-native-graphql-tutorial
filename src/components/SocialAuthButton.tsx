import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import COLORS from '.././constants/colors';


type propsTypes = {
    onPress: () => void,
    imgSrc: ImageSourcePropType,
    text: String
}

const SocialAuthButton = (props: propsTypes) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.button}
        >
            <Image

                source={props.imgSrc}
                style={{
                    height: 36,
                    width: 36,
                    marginRight: 8
                }}
                resizeMode='contain'
            />

            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default SocialAuthButton

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.grey,
        marginRight: 4,
        borderRadius: 10
    }
})