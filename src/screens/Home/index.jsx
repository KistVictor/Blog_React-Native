import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Background from '../../components/Background';
import CardPost from '../../components/CardPost.jsx';

export default function Home() {
  return (
    <Background>
      <StatusBar style="auto" />
      <CardPost />
    </Background>
  );
}