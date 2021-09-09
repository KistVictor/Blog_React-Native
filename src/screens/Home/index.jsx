import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View } from 'react-native';

import Background from '../../components/Background';
import CardPost from '../../components/CardPost';
import getData from '../../services/getData'
import { styles } from './styles';

export default function Home() {
  const [data, setData] = useState([])

  function removePostCard(id) {
    const posts = data
    const post = posts.filter(post => post.id === id)
    console.log(post)
    if (post[0].id === id) {
      console.log(post[0])
      posts.splice(posts.indexOf(post[0]), 1)
      console.log(posts)
      setData(posts)
    }
  }

  async function generateCardPost() {
    const apiData = await getData()
    setData(apiData)
  }

  return (
    <Background>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer} >
        <Button title="Atualizar" onPress={generateCardPost} />
        <Button title="Trazer dados api" onPress={generateCardPost} />
      </View >
      {data.map((post) => <CardPost key={post.id} title={post.title} content={post.body} id={post.id} userId={post.userId} removePostCard={removePostCard} />)}
    </Background>
  );
}