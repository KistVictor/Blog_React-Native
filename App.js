import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Home from './src/screens/Home'
import PostMaker from './src/screens/PostMaker'
import PostEditor from './src/screens/PostEditor'
import BuscaId from './src/screens/BuscaId'
import Busca from './src/screens/Busca'

import storageApiData from './src/services/storageApiData'
import getData from './src/services/getData'

const Drawer = createDrawerNavigator();

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    storageApiData()
    refreshPostCard()
  }, [])

  async function refreshPostCard() {
    const asyncStorageData = await getData()
    console.log("chamado")
    setData(asyncStorageData)
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home" >
          {(props) => <Home {...props} data={data} refreshPostCard={refreshPostCard} />}
        </Drawer.Screen>

        <Drawer.Screen name="Criar post" >
          {(props) => <PostMaker {...props} refreshPostCard={refreshPostCard} />}
        </Drawer.Screen>

        <Drawer.Screen name="Editor de post" gestureEnabled="false" >
          {(props) => <PostEditor {...props} refreshPostCard={refreshPostCard} />}
        </Drawer.Screen>

        <Drawer.Screen name="Request ID" >
          {(props) => <BuscaId {...props} refreshPostCard={refreshPostCard} />}
        </Drawer.Screen>

        <Drawer.Screen name="Busca" >
          {(props) => <Busca {...props} refreshPostCard={refreshPostCard} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}