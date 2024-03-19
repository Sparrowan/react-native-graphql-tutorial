import { View, Text, StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import COLORS from '.././constants/colors';
import { Control, Controller } from 'react-hook-form';



type propsTypes = {
  label: string,
  placeholder: string,
  keyboardType: KeyboardTypeOptions,
  control: any,
  rules?: {},
  name: string,
  error: {
    message?: string | undefined;
    ref?: { name: string } | undefined;
    type?: string | undefined;
  } | undefined
}

const RHFTextInput = (props: propsTypes) => {
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
                keyboardType={props.keyboardType}
                style={{
                  width: "100%"
                }}
              />
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