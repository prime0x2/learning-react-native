import { View, StyleSheet, Pressable } from 'react-native'
import MyText from './MyText/MyText'
import React from 'react'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

export default function PlanetHeader({ backButton = false, title = 'All Planets' }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {
                backButton && (
                    <Pressable
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={styles.backButton}
                    >
                        <Ionicons style={styles.icon} name="chevron-back-outline" size={24} color={colors.grey} />
                    </Pressable>
                )
            }
            <MyText preset="h1" style={{ textTransform: 'uppercase' }}>{title}</MyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing[4],
        paddingHorizontal: spacing[6],
        borderBottomWidth: 0.3,
        borderBottomColor: colors.grey,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: spacing[3],
        marginLeft: -spacing[4],
        fontSize: 30,
    }
})