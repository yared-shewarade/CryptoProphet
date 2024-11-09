import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const PurchasedPriceInput = ({ onPriceChange }) => {
    const [price, setPrice] = useState('');

    const handlePriceChange = (text) => {
        setPrice(text);
        onPriceChange(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={handlePriceChange}
                placeholder="Enter price"
                keyboardType="numeric"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    input: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        width: 80,
        textAlign: 'center',
    },
});

export default PurchasedPriceInput;