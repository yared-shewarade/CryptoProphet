import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const AssetInput = ({ onAssetChange }) => {
    const [asset, setAsset] = useState('');

    const handleAssetChange = (text) => {
        setAsset(text.toLowerCase()); // Convert to lowercase
        onAssetChange(text.toLowerCase());
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={asset}
                onChangeText={handleAssetChange}
                placeholder="Enter crypto"
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

export default AssetInput;