import {api} from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function storageData() {

  const getDataFromApi = async () => {
    try {
      const response = await api.get('https://jsonplaceholder.typicode.com/posts')
      return response
    } catch (err) {
      console.log(err)
    }
  }
  const ApiData = await getDataFromApi()

  const storeData = async (data) => {
    try {
      const jsonData = JSON.stringify(data)
      await AsyncStorage.setItem('@storage_Key', jsonData)
    } catch (err) {
      console.log(err)
    }
  }
  storeData(ApiData.data)
}