import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';

import Background from '../../components/Background';
import CardPost from '../../components/CardPost';
import getData from '../../services/getData'
import storageApiData from '../../services/storageApiData'

export default function Home() {
  const [data, setData] = useState([])

  function removePostCard(id) {
    const posts = data
    const post = posts.filter(post => post.id === id)
    console.log(post)
    if (post[0].id === id) {
      console.log(post)
      posts.splice(post, 1)
      console.log(posts)
      setData(posts)
    }
  }

  async function generateCardPost() {
    storageApiData()
    const apiData = await getData()
    setData(apiData)
  }

  return (
    <Background>
      <StatusBar style="auto" />
      {data.map((post) => <CardPost key={post.id} title={post.title} content={post.body} id={post.id} userId={post.userId} removePostCard={removePostCard} />)}
      <Button title="Trazer dados api" onPress={generateCardPost} />
    </Background>
  );
}