import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View } from 'react-native';

import Background from '../../components/Background';
import { styles } from './styles';

import storagePost from '../../services/storagePost'

export default function PostEditor() {
  const [title, onChangeTitle] = useState('');
  const [content, onChangeContent] = useState('');

  function postRegister() {
    const post = {
      title: title,
      content: content,
      id: 0,
      userId: 0,
    }
    storagePost(post)
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