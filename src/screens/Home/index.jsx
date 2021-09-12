import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, View, TextInput } from 'react-native'

import { styles } from './styles'
import Background from '../../components/Background'
import CardPost from '../../components/CardPost'

import storagaData from '../../services/storageData'
import getData from '../../services/getData'

export default function Home({navigation, data, setData, refreshPostCard}) {
  const [search, setSearch] = useState('')
  
  async function removePostCard(id) {
    const posts = await getData()
    const post = posts.filter(post => post.id === id)
    if (post[0].id === id) {
      posts.splice(posts.indexOf(post[0]), 1)
      storagaData(posts)
      refreshPostCard()
    }
  }

  async function searchPostCard() {
    const asyncStorageData = await getData()
    let list = []
    if (search != '') {
      for (let i = 0; i < asyncStorageData.length; i++ ) {
        let expression = new RegExp(search, "i")
        if (expression.test(asyncStorageData[i].title)) {
          list = [...list, asyncStorageData[i]]
        }
      }
      setData(list)
    } 
    else {
      setData(asyncStorageData)
      console.log(asyncStorageData)
    }
  }

  return (
    <Background>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TextInput
          onChangeText={setSearch}
          value={search}
          style={styles.input}
          placeholder="Título"
        />
        <Button title="Buscar" onPress={searchPostCard} />
      </View>
      {data.map((post) => 
        <CardPost key={post.id} title={post.title} content={post.body} id={post.id} userId={post.userId} removePostCard={removePostCard} navigation={navigation} />
      )}
    </Background>
  );
}