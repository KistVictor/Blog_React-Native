import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import Background from '../../components/Background';

export default function Home() {
  return (
    <Background>

      <Text>Hello World!</Text>
      <StatusBar style="auto" />

    </Background>
  );
}