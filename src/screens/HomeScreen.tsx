import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { reduxLogin } from '../redux/thunks/auth';
import useLoginSuccess from '../hooks/useLoginSuccess';
import { useDispatch } from '../redux/store';
import { useSelector } from "react-redux";
import { selectAuthUser } from '../redux/selectors/auth';



const HomeScreen = () => {
    // const login = methods.handleSubmit((values) => dispatch(reduxLogin(values)).then(onLoginSuccess));
    const dispatch = useDispatch();
    const { token } = useSelector(selectAuthUser);

    const onLoginSuccess = useLoginSuccess();

    const login = (values: any) => { dispatch(reduxLogin(values)).then(onLoginSuccess) }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => login({ 'email': 'alphius@email.com', 'password': '123', 'device': 'mobile' })}>
                <Text>Login</Text>
            </TouchableOpacity>
            <Text>{token}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 50
    }

})
export default HomeScreen;
