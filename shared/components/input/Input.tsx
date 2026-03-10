import React from 'react'
import { TextInput } from 'react-native'
import { inputStyles } from './inputSytes'
import { colors } from '../../consts/colors'

interface InputProps {
    placeholder: string
    multiline?: boolean
    onChange: (text: string) => void
    value: string
}
export default function Input({ placeholder, onChange, value, multiline = false }: InputProps) {
    return (
        <TextInput style={ [ inputStyles.base, multiline && inputStyles.multiline ] } placeholderTextColor={ colors.placeholder }
            placeholder={ placeholder } multiline={ multiline }
            onChangeText={ onChange } value={ value }
        />
    )
}
