import { View, StyleSheet } from 'react-native'
import React from 'react'
import PlanetHeader from '../components/PlanetHeader'

export default function PlanetScreen({ route }) {

    const { planet } = route.params;

    return (
        <View>
            <PlanetHeader backButton={true} title={planet.name} />
        </View>
    )
}