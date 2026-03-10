import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

export const inputStyles = StyleSheet.create({
    base: {
        backgroundColor: colors.inputBackgorund,
        borderWidth: 1,
        borderColor: colors.grayBorder,
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 8,
        width: "100%"
    },
    placeholder: { color: colors.background },
    multiline: { height: 80 }
})