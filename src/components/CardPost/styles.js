import { StyleSheet } from "react-native";
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({

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

  title: {
    color: theme.colors.heading,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  content: {
    color: theme.colors.body,
    fontSize: 16,
    marginBottom: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5
  },

  text: {
    color: theme.colors.body,
    fontSize: 12,
    marginRight: 10
  }

})