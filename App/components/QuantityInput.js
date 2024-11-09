import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const QuantityInput = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState('');

    const handleQuantityChange = (text) => {
        setQuantity(text);
        onQuantityChange(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={handleQuantityChange}
                placeholder="Enter quantity"
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

export default QuantityInput;