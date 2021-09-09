import { StyleSheet } from "react-native"

import { theme } from "../../styles/theme"

export const styles = StyleSheet.create ({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '420px',
        minWidth: '220px',
        backgroundColor: theme.colors.terciary,
        padding: 15,
        borderRadius: 5,
        marginBottom: "20px"
    },

    text: {
        marginBottom: 12,
        color: theme.colors.background,
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