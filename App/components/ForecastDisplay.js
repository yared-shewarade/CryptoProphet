import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastDisplay = ({ forecast }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: forecast > 0 ? 'green' : 'red' }}>
                {forecast ? (forecast > 0 ? 'UP' : 'DOWN') : 'Loading...'}
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

export default ForecastDisplay;