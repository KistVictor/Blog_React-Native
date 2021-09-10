import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View, Keyboard, Alert } from 'react-native';

import Background from '../../components/Background';
import { styles } from './styles';

import storagePost from '../../services/storagePost'

export default function PostEditor({navigation}) {
  const [title, onChangeTitle] = useState('');
  const [content, onChangeContent] = useState('');

  function postRegister() {
    const post = {
      title: title,
      body: content,
      id: 0,
      userId: 0,
    }
    storagePost(post)
    Keyboard.dismiss()
    Alert.alert("Sucesso", "Post salvo com sucesso")
    navigation.navigate('Home')
    onChangeTitle('')
    onChangeContent('')
  }

  return (
    <Background>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.text}>Crie seu post!</Text>
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
          onPress={postRegister}
          title="Salvar post"
        />
      </View>

    </Background>
  );
}