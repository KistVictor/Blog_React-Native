import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function storagaData(data) {
  try {
    const jsonData = JSON.stringify(data)
    await AsyncStorage.setItem('@storage_Key', jsonData)
  } catch (err) {
    console.log(err)
  }
}