import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View, Keyboard, Alert } from 'react-native';

import Background from '../../components/Background';
import { styles } from './styles';

import storagePost from '../../services/storagePost'
import storagaData from '../../services/storageData'
import getData from '../../services/getData'

export default function PostEditor({ route, navigation, refreshPostCard }) {
  let { id } = route.params;
  const [title, onChangeTitle] = useState('');
  const [content, onChangeContent] = useState('');

  useEffect(() => {
    pushPostCard()
    console.log(id)
  }, [id])

  function findPost(asyncStorageData, key) {
    const post = asyncStorageData.filter(post => post.id === key)
    return post[0]
  }

  async function pushPostCard() {
    let asyncStorageData = await getData()
    const post = findPost(asyncStorageData, id)
    console.log(id)
    if (post.id === id) {
      onChangeTitle(post.title)
      onChangeContent(post.body)
    }
  }

  async function changePostCard() {
    let asyncStorageData = await getData()
    let post = findPost(asyncStorageData, id)
    if (post.id === id) {
      asyncStorageData.splice(asyncStorageData.indexOf(post), 1)
      storagaData(asyncStorageData)
      postRegister(post)
    }
  }

  async function postRegister(post) {
    const newPost = {
      title: title,
      body: content,
      id: post.id,
      userId: post.userId,
    }
    await storagePost(newPost)
    Keyboard.dismiss()
    Alert.alert("Sucesso", "Post salvo com sucesso")
    navigation.navigate('Home')
    onChangeTitle('')
    onChangeContent('')
    refreshPostCard()
  }

  return (
    <Background>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.text}>Edite seu post!</Text>
        <TextInput
          onChangeText={onChangeTitle}
          value={title}
          style={styles.input}
          placeholder="Título"
        />
        <TextInput
          onChangeText={onChangeContent}
          value={content}
          style={styles.input}
          placeholder="Conteúdo"
        />
        <Button
          title="Salvar post"
          onPress={changePostCard}
        />
      </View>

    </Background>
  );
}