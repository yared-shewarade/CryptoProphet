import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfitLossDisplay = ({ purchasedPrice, currentPrice, quantity }) => {
    const totalValue = parseFloat(currentPrice) * parseFloat(quantity);
    const profitLoss = totalValue - (parseFloat(purchasedPrice) * parseFloat(quantity));

    return (
        <View style={styles.container}>
            <Text style={{ color: profitLoss > 0 ? 'green' : 'red' }}>
                {profitLoss ? `${profitLoss.toFixed(2)} USD` : 'N/A'}
            </Text>
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

export default ProfitLossDisplay;