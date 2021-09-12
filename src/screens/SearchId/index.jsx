import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, View, TextInput } from 'react-native'

import { styles } from './styles'
import Background from '../../components/Background'
import CardPost from '../../components/CardPost'
import getApiPostWithID from '../../services/getApiPostWithID'

export default function BuscaID() {
  const [id, setID] = useState(0);
  const [data, setData] = useState([])

  async function searchPost() {
    const asyncStorageData = await getApiPostWithID(id.replace(/^0+/, ''))
    setData(asyncStorageData)
  }

  return (
    <Background>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TextInput
          onChangeText={setID}
          style={styles.input}
          placeholder="ID"
        />
        <Button title="Buscar" onPress={searchPost} color="#373E47" />
      </View>
      {data.hasOwnProperty('id') ? <CardPost key={data.id} title={data.title} content={data.body} id={data.id} userId={data.userId} /> : null }
    </Background>
  )
}