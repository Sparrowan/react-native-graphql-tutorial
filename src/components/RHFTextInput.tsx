import { View, Text, StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import COLORS from '.././constants/colors';


type propsTypes = {
  label: string,
  placeholder: string,
  keyboardType: KeyboardTypeOptions
}

const RHFTextInput = (props: propsTypes) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.inputLabels}>{props.label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.black}
          keyboardType={props.keyboardType}
          style={{
            width: "100%"
          }}
        />
      </View>
    </View>
  )
}

export default RHFTextInput

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