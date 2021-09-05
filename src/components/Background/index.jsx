  
import React from 'react';

import { styles } from './styles';
import { View } from 'react-native';

export default function Background({ children }) {

  return (
    <View
      style={styles.container}
    >
      {children}
    </View>
  )
}