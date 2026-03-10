import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

export const postStyles = StyleSheet.create({
    container: { gap: 8, backgroundColor: colors.inputBackgorund, padding: 8, borderRadius: 8, overflow: 'hidden' },
    title: { fontSize: 20, fontWeight: '600' },
    body: { fontSize: 12 },
    controls: { width: "100%", flexDirection: 'row', justifyContent: 'flex-end', gap: 4 },
    loading: { opacity: 1 },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    }
})