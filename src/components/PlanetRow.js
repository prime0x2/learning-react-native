import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import MyText from './MyText/MyText'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function PlanetRow({ item }) {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: spacing[5],
        },
        summary: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        circle: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: item.color
        },
        itemName: {
            marginTop: -2,
            marginLeft: spacing[4],
            textTransform: 'uppercase',
            letterSpacing: 1,
        }
    })

    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate('Planet', { planet: item });
            }}
            style={styles.container}
        >
            <View style={styles.summary}>
                <View style={styles.circle} />
                <MyText preset='h4' style={styles.itemName}>{item.name}</MyText>
            </View>

            <Ionicons name="chevron-forward-outline" size={20} color={colors.grey} />
        </Pressable>
    )
}


