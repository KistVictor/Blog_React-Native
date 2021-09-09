import getData from "./getData"
import storageData from './storageData';

function getPostId(apiData) {
  let biggerId = 0
  for (let i = 0; i < apiData.length; i++) {
    biggerId = apiData[i].id
  }
  return biggerId
}

function getUserId(apiData) {
  let biggerId = 0
  for (let i = 0; i < apiData.length; i++) {
    biggerId = apiData[i].userId
  }
  return biggerId
}

export default async function storagePost(post) {
  const apiData = await getData()
  const id = getPostId(apiData)
  const userId = getUserId(apiData)
  post.id = id + 1
  post.userId = userId + 1
  apiData.push(post)
  console.log(post)
  console.log(apiData)

  storageData(apiData)
}