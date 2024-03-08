import { View, Text, FlatList, StyleSheet, Animated } from 'react-native'
import React, { useRef, useState } from 'react'

import onboardingData from '../../utils/onboardingData'
import OnboardingItem from '../../components/OnboardingItem'
import Paginator from '../../components/Paginator'
import NextButton from '../../components/NextButton'

const OnboardingScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current
    const slidesRef = useRef<FlatList | null>(null)
    const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any }) => {
        if (viewableItems && viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    const scrollTo = () => {
        if (currentIndex < onboardingData.length - 1) {
            slidesRef?.current?.scrollToIndex({ index: currentIndex + 1 })
        } else {
            console.log('Last item')
        }
    }
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
                        useNativeDriver: false
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
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
