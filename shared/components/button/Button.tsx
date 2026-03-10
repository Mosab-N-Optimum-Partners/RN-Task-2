import { Pressable, Text } from 'react-native'
import { buttonsStyles } from './buttonsStyles';
type ButtonType = "primary" | "secondary" | "dangerous"
interface ButtonProps {
    label: string;
    onPress: () => void;
    fullWidth?: boolean;
    type?: ButtonType;
    bigText?: boolean;
}
export default function Button({ label, onPress, fullWidth = false, type = 'primary', bigText = false }: ButtonProps) {
    return (
        <Pressable style={ [ buttonsStyles.base, buttonsStyles[ type ], fullWidth ? buttonsStyles.fullWidth : null, ] } onPress={ onPress }>
            <Text style={ [ buttonsStyles.buttonText, bigText ? buttonsStyles.bigText : null ] }>{ label }</Text>
        </Pressable>
    )
}
