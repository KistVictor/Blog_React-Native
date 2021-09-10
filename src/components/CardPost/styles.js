import { StyleSheet } from "react-native";
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({

  container: {
    maxWidth: '420px',
    minWidth: '220px',
    backgroundColor: theme.colors.secundary,
    padding: 15,
    borderRadius: 5,
    marginBottom: "20px"
  },

  title: {
    color: theme.colors.heading,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: "10px"
  },

  content: {
    color: theme.colors.body,
    fontSize: 16,
    marginBottom: "10px"
  },

  specify: {
    flexDirection: 'row',
    marginBottom: "5px"
  },

  specifyText: {
    color: theme.colors.body,
    fontSize: 12,
    marginRight: '10px'
  }

})