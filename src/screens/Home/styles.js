import { StyleSheet } from "react-native"

import { theme } from "../../styles/theme"

export const styles = StyleSheet.create ({

    container: {
        flexDirection: 'row'
    },

    input: {
        maxWidth: 420,
        minWidth: 220,
        height: 35,
        borderRadius: 3,
        paddingLeft: 10,
        color: theme.colors.background,
        backgroundColor: '#ffffff'
    },

})