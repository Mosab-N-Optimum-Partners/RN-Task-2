import React, { memo } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import Button from '../button/Button'
import { postStyles } from './postStyles'
import { PostStatus } from '../../../store/post.types'
import { colors } from '../../consts/colors'
interface PostProps {
    id: number,
    title: string,
    body: string,
    status: PostStatus,
    handleEdit: (id: number) => void,
    handleDelete: (id: number) => void
}
function Post({ id, status, title, body, handleEdit, handleDelete }: PostProps) {
    const isBusy: boolean = status !== "idle";
    return (
        <View style={ [ postStyles.container, isBusy ? postStyles.loading : null ] }>
            <Text style={ postStyles.title }>{ title }</Text>
            <Text style={ postStyles.body }>{ body }</Text>
            <View style={ postStyles.controls }>
                <Button label='Edit' onPress={ () => handleEdit(id) } />
                <Button label='Delete' onPress={ () => handleDelete(id) } type='dangerous' />
            </View>
            { isBusy && (
                <View style={ postStyles.overlay }>
                    <ActivityIndicator
                        size={ 'large' }
                        color={ status === 'deleting' ? colors.dangerous : colors.primary }
                    />
                    <Text>
                        { status === 'deleting' ? 'Deleting...' : 'Updating...' }
                    </Text>
                </View>
            ) }
        </View>
    )
}

export default memo(Post);