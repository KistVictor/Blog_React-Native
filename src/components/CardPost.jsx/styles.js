import { StyleSheet } from "react-native";
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({

  container: {
    maxWidth: '420px',
    minWidth: '220px',
    backgroundColor: theme.colors.secundary,
    padding: '15px',
    borderRadius: '15px',
    gap: '3px'
  },

  title: {
    color: theme.colors.heading,
    fontSize: '20px',
    fontWeight: 'bold',
  },

  body: {
    color: theme.colors.body,
    fontSize: '16px',
  },

  specify: {
    flexDirection: 'row',
    gap: '10px'
  },

  specifyText: {
    color: theme.colors.body,
    fontSize: '12px',
  }

})