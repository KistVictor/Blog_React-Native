  
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
        {!removePostCard ? "" :
          <Button
            title="Excluir post"
            onPress={() => removePostCard(id)}
            color="#E51C44"
          />
        }
        {!navigation ? "" :
        <Button
          title="Editar post"
          onPress={() => navigation.navigate('Editor de post', {
            id: id
          })}
          color="#373E47"
        />
        }
      </View>
    </View>
  )
}