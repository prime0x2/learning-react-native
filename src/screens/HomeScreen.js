import { FlatList, View, StyleSheet } from 'react-native'
import React from 'react'
import { planets } from '../data/planets'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import PlanetRow from '../components/PlanetRow'
import PlanetHeader from '../components/PlanetHeader'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <PlanetHeader />
            <FlatList
                contentContainerStyle={styles.list}
                data={planets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PlanetRow item={item} />
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        paddingVertical: spacing[3],
        paddingHorizontal: spacing[6],
    },
    separator: {
        borderBottomWidth: 0.3,
        borderBottomColor: colors.grey,
        marginVertical: spacing[1],
    }
})