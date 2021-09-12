import { StyleSheet } from "react-native"

import { theme } from "../../styles/theme"

export const styles = StyleSheet.create ({

    container: {
      maxWidth: '420px',
      minWidth: '320px',
      backgroundColor: theme.colors.secundary,
      padding: 15,
      borderRadius: 5,
      marginTop: "20px",
      borderWidth: 1,
      borderColor: theme.colors.terciary,
    },

    text: {
        marginBottom: 12,
        color: theme.colors.heading,
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