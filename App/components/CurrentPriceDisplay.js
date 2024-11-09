import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentPriceDisplay = ({ currentPrice }) => {
    return (
        <View style={styles.container}>
            <Text>{currentPrice !== null ? `${currentPrice} USD` : 'Loading...'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
    },
});

export default CurrentPriceDisplay;