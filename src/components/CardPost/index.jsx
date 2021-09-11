  
import React from 'react';

import { styles } from './styles';
import { Text, View, Button } from 'react-native';

export default function CardPost({ title, content, id, userId, removePostCard, navigation }) {

  return (
    <View style={styles.container} >
      <Text style={styles.title} >{title}</Text>
      <Text style={styles.text} >by {userId}</Text>
      <Text style={styles.content} >{content}</Text>
      <View style={styles.buttonContainer} >
        <Button
          title="Excluir post"
          onPress={() => removePostCard(id)}
        />
        <Button
          title="Editar post"
          onPress={() => navigation.navigate('Editor de post', {
            id: id
          })}
        />
      </View>
    </View>
  )
}