  
import React from 'react';

import { styles } from './styles';
import { Text, View } from 'react-native';

export default function CardPost() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Titulo do post</Text>
      <View style={styles.specify}>
        <Text style={styles.specifyText}>by Victor Kist</Text>
        <Text style={styles.specifyText}>12/09/21</Text>
      </View>
      <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud</Text>
    </View>
  )
}