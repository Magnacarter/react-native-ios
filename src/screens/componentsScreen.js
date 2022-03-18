import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ConmponentsScreen = () => {
    const greeting = 'Hello World!';
    const name = 'Adam';

    return (
        <View>
            <Text style={styles.textStyle}>
                This is the Components Screen.
            </Text>
            <Text style={styles.sub}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    sub: {
        fontSize: 45
    }
})

export default ConmponentsScreen;