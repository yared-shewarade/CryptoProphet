import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalValueDisplay = ({ currentPrice, quantity }) => {
    const totalValue = parseFloat(currentPrice) * parseFloat(quantity);

    return (
        <View style={styles.container}>
            <Text>{totalValue ? `${totalValue.toFixed(2)} USD` : 'N/A'}</Text>
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

export default TotalValueDisplay;