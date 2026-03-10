import { View } from 'react-native'
import { usePostStore } from '../store/postsStore'
import Input from '../shared/components/input/Input'
import { useState } from 'react'
import Screen from '../shared/layout/Screen'
import Button from '../shared/components/button/Button'
import { useNavigation } from '@react-navigation/native'
import { Nav } from '../navigation/types'

export default function CreatePostScreen() {
  const { createPost } = usePostStore()
  const [ inputTitle, setTitle ] = useState("");
  const [ inputBody, setBody ] = useState("");
  const navigation = useNavigation<Nav>();
  const handleCreate = () => {
    if (!inputTitle.trim() || !inputBody.trim()) return;
    createPost({ title: inputTitle, body: inputBody })
    navigation.goBack()
  }
  return (
    <Screen>
      <Input placeholder={ "Title" } value={ inputTitle } onChange={ setTitle } />
      <Input placeholder={ "Body" } value={ inputBody } onChange={ setBody } multiline={ true } />
      <Button bigText label='Create Post' onPress={ handleCreate } fullWidth />
    </Screen>
  )
}
