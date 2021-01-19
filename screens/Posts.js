import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ListItem } from '../components/ListItem';

export const Posts = ({ navigation }) => {
    const userId = navigation.getParam('user_id');
    const [loading, setLoading] = useState (true);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        setPosts(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <View style={styles.container}>
            {
                loading ? <Text>Cargando...</Text> :
                    <FlatList
                        style={styles.list}
                        data={posts.filter(x => x.userId === userId)}
                        keyExtractor={x => String(x.id)}
                        renderItem={({ item }) =>
                            <ListItem
                                onPress={() => navigation.navigate('Posts', { user_id: item.id })}
                                title={item.title}
                            />}
                    />
            }
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
