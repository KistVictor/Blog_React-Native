import { StyleSheet } from "react-native"

import { theme } from "../../styles/theme"

export const styles = StyleSheet.create ({

    container: {
        flexDirection: 'row'
    },

    input: {
        maxWidth: '420px',
        minWidth: '220px',
        height: 35,
        borderRadius: 3,
        paddingLeft: 10,
        color: theme.colors.background,
        backgroundColor: '#ffffff'
    },

})