import { ActivityIndicator, View } from "react-native";
import { colors } from "../consts/colors";
import { loadingIndecatorStyles } from "./loadingIndecatorStyle";

export default function LoadingIndecator() {
    return (
        <View style={ loadingIndecatorStyles.centered }>
            <ActivityIndicator size="large" color={ colors.primary } />
        </View>
    )
}
