import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

export const buttonsStyles = StyleSheet.create({
    base: {
        paddingHorizontal: 20, paddingVertical: 8,
        borderRadius: 8,
    },
    bigText: { fontSize: 20 },
    buttonText: { color: colors.buttonText, textAlign: 'center', fontSize: 16 },
    primary: { backgroundColor: colors.primary },
    secondary: { backgroundColor: colors.secondary },
    dangerous: { backgroundColor: colors.dangerous },
    fullWidth: { width: "100%" }
})