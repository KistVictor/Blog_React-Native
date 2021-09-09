import {api} from './api'
import storageData from './storageData';

export default async function storageApiData() {

  const getDataFromApi = async () => {
    try {
      const response = await api.get('https://jsonplaceholder.typicode.com/posts')
      return response
    } catch (err) {
      console.log(err)
    }
  }
  const apiData = await getDataFromApi()

  storageData(apiData.data)
}