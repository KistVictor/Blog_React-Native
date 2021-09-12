import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, View, TextInput } from 'react-native'

import { styles } from './styles'
import Background from '../../components/Background'
import CardPost from '../../components/CardPost'

import getData from '../../services/getData'

export default function Home({navigation, data, setData, refreshPostCard, removePostCard}) {
  const [search, setSearch] = useState('')

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
        <Button title="Buscar" onPress={searchPostCard} color="#373E47" />
      </View>
      {data.map((post) => 
        <CardPost key={post.id} title={post.title} content={post.body} id={post.id} userId={post.userId} removePostCard={removePostCard} navigation={navigation} />
      )}
    </Background>
  );
}