import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from '../shared/consts/colors';
import PostsListScreen from '../screens/PostsListScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import EditPostScreen from '../screens/EditPostScreen';
import AppScreen, { NavigateButton } from './components/AppScreen';
import { Stack } from './types';


const navigatorOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: colors.primary },
    headerTintColor: colors.inputBackgorund,
    headerTitleStyle: { fontWeight: 'bold' },
}

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ "PostsList" }
                screenOptions={ navigatorOptions }>
                <Stack.Screen name='PostsList' component={ PostsListScreen } options={ { title: 'React Native Posts Manager', headerLeft: () => <NavigateButton icon='add' to='CreatePost' /> } } />
                <Stack.Screen name='CreatePost' component={ CreatePostScreen } options={ { title: 'Create Post' } } />
                <Stack.Screen name='EditPost' component={ EditPostScreen } options={ { title: 'Edit Post' } } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

