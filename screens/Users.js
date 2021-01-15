import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { ListItem } from '../components/ListItem'

const users = [
    { id: '1', name: 'Leanne' },
    { id: '2', name: 'Ervin' },
    { id: '3', name: 'Elvia' },
]

export const Users = () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={users}
                keyExtractor={x => x.id}
                renderItem={({ item }) => <ListItem title={item.name} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 15
    },
    list: {
        alignSelf: 'stretch'
    }
});
