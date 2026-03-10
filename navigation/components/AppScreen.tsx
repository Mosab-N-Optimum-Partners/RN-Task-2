import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../shared/consts/colors"
import { ComponentProps } from "react"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList, Stack } from "../types"
// Turns out Stack.Navigator only accept Stack.Screen children directly , not through a component
type AppScreenProps = {
  name: keyof RootStackParamList
  component: React.ComponentType<any>
  title?: string
  headerLeft?: () => React.ReactNode
}
export default function AppScreen({ name, component, title, headerLeft }: AppScreenProps) {
  return (
    <Stack.Screen
      name={ name }
      component={ component }
      options={ {
        title,
        headerShown: !!title,
        headerLeft
      } }
    />
  )
}

export type IoniconName = ComponentProps<typeof Ionicons>[ 'name' ];
interface NavigateButtonProps {
  icon: IoniconName;
  to: keyof RootStackParamList
}

export function NavigateButton({ icon, to }: NavigateButtonProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <Pressable onPress={ () => navigation.navigate(to as any) }>
      <Ionicons name={ icon } size={ 28 } color={ colors.buttonText } />
    </Pressable>
  )
}
