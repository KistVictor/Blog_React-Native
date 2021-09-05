import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import Background from '../../components/Background';

export default function PostEditor() {
  return (
    <Background>

      <Text>Editor de post!</Text>
      <StatusBar style="auto" />

    </Background>
  );
}