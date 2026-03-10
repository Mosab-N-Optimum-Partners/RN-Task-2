import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

export const postStyles = StyleSheet.create({
    container: { gap: 8, backgroundColor: colors.inputBackgorund , padding:8, borderRadius: 8 },
    title: { fontSize: 20, fontWeight: '600' },
    body: { fontSize: 12 },
    controls: { width: "100%", flexDirection: 'row', justifyContent: 'flex-end', gap: 4 }
})