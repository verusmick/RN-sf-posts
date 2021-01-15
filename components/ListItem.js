import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ListItem = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    text: {
        fontSize: 18
    }
})
