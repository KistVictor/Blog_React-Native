import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Home from './src/screens/Home'
import PostMaker from './src/screens/PostMaker'
import PostEditor from './src/screens/PostEditor'
import storageApiData from './src/services/storageApiData'

const Drawer = createDrawerNavigator();

export default function App() {
  storageApiData()
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Criar post" component={PostMaker} />
        <Drawer.Screen name="Editor de post" component={PostEditor} gestureEnabled="false" />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}