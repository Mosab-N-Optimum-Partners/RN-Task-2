import Screen from '../shared/layout/Screen'
import Post from '../shared/components/post/Post'
import { usePostStore } from '../store/postsStore'
import { Alert, FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Nav } from '../navigation/types'
import { useCallback, useEffect } from 'react'
import LoadingIndecator from '../shared/loading-indecator/LoadingIndecator'

export default function PostsListScreen() {
    const { fetchPosts, activePostAction, isLoading, postsById, postIds, deletePost } = usePostStore()
    useEffect(() => {
        fetchPosts();
    }, [])
    const navigation = useNavigation<Nav>();

    const handleDelete = useCallback((id: number) => {
        Alert.alert(
            'Delete Post',
            'Are you sure you want to delete this post?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete', style: 'destructive', onPress: () => {
                        console.log(`POST WITH ID ${ id } DELETES`);

                        deletePost(id)
                    }
                },
            ]
        );
    }, [ deletePost ]);

    const handleEdit = useCallback((id: number) => {
        navigation.navigate('EditPost', { postId: id })
    }, [ navigation ])

    const renderItem = useCallback(({ item: id }: { item: number }) => {
        const currentAction = activePostAction?.id === id ? activePostAction.status : 'idle'
        const { body, title } = postsById[ id ]
        return <Post
            status={ currentAction }
            handleDelete={ handleDelete }
            handleEdit={ handleEdit }
            id={ id } title={ title } body={ body } />
    }, [ postsById, handleDelete, handleEdit, activePostAction ])

    return (
        <Screen>
            { isLoading && postIds.length === 0 ? (
                <LoadingIndecator />
            ) :
                <FlatList
                    data={ postIds }
                    keyExtractor={ (id) => id.toString() }
                    ItemSeparatorComponent={ () => <View style={ { height: 16 } } /> }
                    renderItem={ renderItem }
                />
            }
        </Screen>
    )
}
