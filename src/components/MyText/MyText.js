import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { presets } from './MyText.preset'

export default function MyText({ children, style, preset = 'base' }) {

    const textStyle = StyleSheet.compose(presets[preset], style);

    return (
        <Text style={textStyle}>{children}</Text>
    )
}