import React from 'react'
import { Text, View } from 'react-native'
import Button from '../button/Button'
import { postStyles } from './postStyles'
interface PostProps {
    id: number,
    title: string,
    body: string,
    handleEdit: (id: number) => void,
    handleDelete: () => void
}
export default function Post({ id, title, body, handleEdit, handleDelete }: PostProps) {
    return (
        <View style={ postStyles.container }>
            <Text style={ postStyles.title }>{ title }</Text>
            <Text style={ postStyles.body }>{ body }</Text>
            <View style={ postStyles.controls }>
                <Button label='Edit' onPress={ () => handleEdit(id) } />
                <Button label='Delete' onPress={ handleDelete } type='dangerous' />
            </View>
        </View>
    )
}
