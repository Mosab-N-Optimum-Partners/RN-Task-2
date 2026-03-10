import { View } from 'react-native'
import { usePostStore } from '../store/postsStore'
import Input from '../shared/components/input/Input'
import { useState } from 'react'
import Screen from '../shared/layout/Screen'
import Button from '../shared/components/button/Button'
import { useNavigation } from '@react-navigation/native'
import { Nav } from '../navigation/types'
import Toast from 'react-native-toast-message'

export default function CreatePostScreen() {
  const { createPost } = usePostStore()
  const [ inputTitle, setTitle ] = useState("");
  const [ inputBody, setBody ] = useState("");
  const navigation = useNavigation<Nav>();
  const handleCreate = () => {
    const missingTitle = !inputTitle.trim();
    const missingBody = !inputBody.trim();
    if (missingTitle || missingBody)
    {
      const missingFields = [
        missingTitle ? "Title" : null,
        missingBody ? "Body" : null,
      ].filter(Boolean);
      const message = missingFields.length > 1 ? `${ missingFields.join(" and ") } fields are missing` : `${ missingFields[ 0 ] } field is missing`
      Toast.show({ type: 'error', text1: "Please fill in all fields!", text2: `${ message }` })
      return;
    };
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
