import { useState } from 'react';
import Button from '../shared/components/button/Button'
import Input from '../shared/components/input/Input'
import Screen from '../shared/layout/Screen'
import { usePostStore } from '../store/postsStore';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Nav, RootStackParamList } from '../navigation/types';
type EditPostRouteProp = RouteProp<RootStackParamList, 'EditPost'>;

export default function EditPostScreen() {
  const { updatePost, postsById } = usePostStore();
  const route = useRoute<EditPostRouteProp>();
  const { postId } = route.params;
  const [ inputTitle, setTitle ] = useState(postsById[ postId ]?.title ?? "");
  const [ inputBody, setBody ] = useState(postsById[ postId ]?.body ?? "");
  const navigation = useNavigation<Nav>();

  const handleClick = () => {
    updatePost(postId, { title: inputTitle, body: inputBody })
    navigation.goBack()

  }

  return (
    <Screen>
      <Input placeholder={ "Title" } value={ inputTitle } onChange={ setTitle } />
      <Input placeholder={ "Body" } value={ inputBody } onChange={ setBody } multiline={ true } />
      <Button bigText label='Save Changes' onPress={ handleClick } fullWidth type='secondary' />
    </Screen>
  )
}
