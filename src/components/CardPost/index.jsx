  
import React from 'react';

import { styles } from './styles';
import { Text, View, Button } from 'react-native';

export default function CardPost({title, body, id, userId, removePostCard}) {

  return (
    <View style={styles.container} >
      <Text style={styles.title} >{title}</Text>
      <View style={styles.specify} >
        <Text style={styles.specifyText} >by {userId}</Text>
        <Text style={styles.specifyText} >12/09/21</Text>
      </View>
      <Text style={styles.body} >{body}</Text>
      <Button
        title="Excluir post"
        onPress={() => removePostCard(id)}
      />
    </View>
  )
}