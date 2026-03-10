import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from './screenStyle'
const { screen, safe } = screenStyles
interface ScreenProps {
    children: React.ReactNode
    fillScreen?: boolean
}
export default function Screen({ children }: ScreenProps) {
    return (
        <SafeAreaView edges={ [ 'bottom' ] } style={ [ safe, screen ] }>
            { children }
        </SafeAreaView>
    )
}
