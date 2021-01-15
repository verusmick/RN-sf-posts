import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Users = () => {
    return (
        <View style={styles.container}>
            <Text>Users</Text>            
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
