import { StyleSheet } from "react-native";
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({

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

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: "5px"
  },

  text: {
    color: theme.colors.body,
    fontSize: 12,
    marginRight: '10px'
  }

})