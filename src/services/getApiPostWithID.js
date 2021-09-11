import {api} from './api'

export default async function getApiPostWithID(id) {

  const getDataFromApi = async () => {
    try {
      const response = await api.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      return response
    } catch (err) {
      console.log(err)
    }
  }
  const apiData = await getDataFromApi()

  return apiData.data
}