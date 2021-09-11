import { StyleSheet } from "react-native"

import { theme } from "../../styles/theme"

export const styles = StyleSheet.create ({

    buttonContainer: {
        maxWidth: '420px',
        minWidth: '220px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },

    input: {
        maxWidth: '420px',
        minWidth: '220px',
        height: 35,
        marginBottom: 12,
        borderRadius: 3,
        paddingLeft: 10,
        color: theme.colors.background,
        backgroundColor: '#ffffff'
    },

})