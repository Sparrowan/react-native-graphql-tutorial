import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/utils/client';
import { Provider } from "react-redux";
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigations/AuthStack';
import { ThemeProvider } from './src/utils/theme';
import * as Fonts from "expo-font";
import { fontFiles } from './src/utils/theme/fonts';
import colors from './src/utils/theme/colors';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';





export default function App() {
  const [fontsLoaded] = Fonts.useFonts(fontFiles);

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (!fontsLoaded) {
        await SplashScreen.preventAutoHideAsync();
      } else {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [fontsLoaded]);
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
        </ApolloProvider>
      </Provider>
    </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beforeLoad: {
    backgroundColor: colors.primary.main,
  },
});
