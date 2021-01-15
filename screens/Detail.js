import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Detail = () => {
    return (
        <View style={styles.container}>
            <Text>Detail</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
