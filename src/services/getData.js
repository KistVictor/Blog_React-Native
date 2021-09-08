import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function getData() {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log(err)
  }
  return jsonValue
}