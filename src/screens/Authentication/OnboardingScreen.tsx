import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthRootStackParamList } from '../../navigations/navigationTypes';
import onboardingData from '../../utils/onboardingData';
import OnboardingItem from '../../components/OnboardingItem';
import Paginator from '../../components/Paginator';
import NextButton from '../../components/NextButton';

const OnboardingScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthRootStackParamList, 'Login'>>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showOnBoarding, setShowOnBoarding] = useState(false)
    const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
    const slidesRef = useRef<FlatList | null>(null);
    const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any }) => {
        if (viewableItems && viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = async () => {
        if (currentIndex < onboardingData.length - 1) {
            slidesRef?.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            try {
                await AsyncStorage.setItem('@viewedOnBoarding', 'true');
                navigation.navigate('Login');
            } catch (e) {
                console.log('Async onboard set item error', e);
            }
        }
    };

    const checkOnBoarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@viewedOnBoarding');
            if (value !== null) {
                navigation.navigate('Login');
            } else {
                setShowOnBoarding(true)
            }
        } catch (e) {
            console.log('Async onboard get item error', e);
        }
    };
    useFocusEffect(
        useCallback(() => {
            checkOnBoarding();
        }, [navigation])
    );

    if (!showOnBoarding) {
        // Render loading indicator while AsyncStorage check is in progress
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Render onboarding content once loading is complete
    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={onboardingData}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={onboardingData} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / onboardingData.length)} />
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
