import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export const ListItem = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
        onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
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
