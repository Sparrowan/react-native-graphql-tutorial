
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Authentication/LoginScreen';
import OnboardingScreen from '../screens/Authentication/OnboardingScreen';
import { AuthRootStackParamList } from './navigationTypes';



const Stack = createNativeStackNavigator<AuthRootStackParamList>();


function AuthStack() {


    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AuthStack;