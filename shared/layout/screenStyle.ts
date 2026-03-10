import { colors } from './../consts/colors';
import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
    screen: {
        paddingTop: 12,
        paddingHorizontal: 20,
        gap: 20,
        backgroundColor: colors.background,
    },
    fill: { justifyContent: 'space-between' },
    safe: { flex: 1, backgroundColor: colors.white }
})