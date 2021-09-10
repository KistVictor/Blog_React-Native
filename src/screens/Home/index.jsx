import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, View } from 'react-native'

import { styles } from './styles'
import Background from '../../components/Background'
import CardPost from '../../components/CardPost'

import getData from '../../services/getData'
import storagaData from '../../services/storageData'

export default function Home({navigation}) {
  const [data, setData] = useState([])

  useEffect (() => {refreshPostCard()}, [])

  function removePostCard(id) {
    const posts = data
    const post = posts.filter(post => post.id === id)
    if (post[0].id === id) {
      posts.splice(posts.indexOf(post[0]), 1)
      storagaData(posts)
      refreshPostCard()
    }
  }

  async function refreshPostCard() {
    const asyncStorageData = await getData()
    setData(asyncStorageData)
  }

  return (
    <Background>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer} >
        <Button title="Atualizar" onPress={refreshPostCard} />
      </View >
      {data.map((post) => 
        <CardPost key={post.id} title={post.title} content={post.body} id={post.id} userId={post.userId} removePostCard={removePostCard} navigation={navigation} />)
      }
    </Background>
  );
}