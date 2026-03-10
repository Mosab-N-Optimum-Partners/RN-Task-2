import Screen from '../shared/layout/Screen'
import Post from '../shared/components/post/Post'
import { usePostStore } from '../store/postsStore'
import { Alert, FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Nav } from '../navigation/types'
import { useEffect } from 'react'
import LoadingIndecator from '../shared/loading-indecator/LoadingIndecator'

export default function PostsListScreen() {
    const { fetchPosts, isLoading, postsById, postIds, deletePost } = usePostStore()
    useEffect(() => {
        fetchPosts();
    }, [])
    const navigation = useNavigation<Nav>();

    const handleDelete = (id: number) => {
        Alert.alert(
            'Delete Post',
            'Are you sure you want to delete this post?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => deletePost(id) },
            ]
        );
    };

    return (
        <Screen>
            { isLoading ? (<LoadingIndecator />) :

                <FlatList
                    data={ postIds }
                    keyExtractor={ (id) => id.toString() }
                    ItemSeparatorComponent={ () => <View style={ { height: 16 } } /> }
                    renderItem={ ({ item: id }) => {
                        const { body, title } = postsById[ id ]
                        return <Post
                            handleDelete={ () => handleDelete(id) }
                            handleEdit={ () => navigation.navigate('EditPost', { postId: id }) }
                            id={ id } title={ title } body={ body } />
                    } }
                /> }


        </Screen>
    )
}
