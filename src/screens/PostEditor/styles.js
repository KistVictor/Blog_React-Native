import { StyleSheet } from "react-native"

import { theme } from "../../styles/theme"

export const styles = StyleSheet.create ({

    container: {
      maxWidth: 420,
      minWidth: 320,
      backgroundColor: theme.colors.secundary,
      padding: 15,
      borderRadius: 5,
      marginTop: 20,
      borderWidth: 1,
      borderColor: theme.colors.terciary,
    },

    text: {
        marginBottom: 12,
        color: theme.colors.heading,
    },

    input: {
        maxWidth: 420,
        minWidth: 220,
        height: 35,
        marginBottom: 12,
        borderRadius: 3,
        paddingLeft: 10,
        color: theme.colors.background,
        backgroundColor: '#ffffff'
    },

})