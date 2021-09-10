import getData from "./getData"
import storageData from './storageData';

function getPostId(apiData) {
  let biggerId = 0
  for (let i = 0; i < apiData.length; i++) {
    if (apiData[i].id >= biggerId) {
      biggerId = apiData[i].id
    }
  }
  return biggerId + 1
}

function getUserId(apiData) {
  let biggerId = 0
  for (let i = 0; i < apiData.length; i++) {
    if (apiData[i].id >= biggerId) {
      biggerId = apiData[i].userId
    }
  }
  return biggerId + 1
}

export default async function storagePost(post) {
  const apiData = await getData()
  post.id = getPostId(apiData)
  post.userId = getUserId(apiData)
  apiData.unshift(post)

  storageData(apiData)
}