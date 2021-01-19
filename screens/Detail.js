import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Detail = ({ navigation }) => {
    const body = navigation.getParam('body');
    const title = navigation.getParam('title');
    const name = navigation.getParam('name');
    console.log(body);
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{title}</Text>
            <Text>{body}</Text>            
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
