import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    PostsList: undefined;
    CreatePost: undefined;
    EditPost: { postId: number };
}
export type Nav = NativeStackNavigationProp<RootStackParamList>; 
export const Stack = createNativeStackNavigator<RootStackParamList>();
