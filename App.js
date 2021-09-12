import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Home from './src/screens/Home'
import PostMaker from './src/screens/PostMaker'
import PostEditor from './src/screens/PostEditor'
import SearchId from './src/screens/SearchId'

import storageApiData from './src/services/storageApiData'
import getData from './src/services/getData'
import storagaData from './src/services/storageData'

const Drawer = createDrawerNavigator();

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    storageApiData()
    refreshPostCard()
  }, [])

  async function refreshPostCard() {
    const asyncStorageData = await getData()
    setData(asyncStorageData)
  }

  async function removePostCard(id) {
    const posts = await getData()
    const post = posts.filter(post => post.id === id)
    if (post[0].id === id) {
      posts.splice(posts.indexOf(post[0]), 1)
      storagaData(posts)
      refreshPostCard()
    }
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#2D333B'
          },
          drawerLabelStyle: {
            color: '#ADBAC7'
          },
          sceneContainerStyle: {
            backgroundColor: '#1C2128'
          },
          headerStyle: {
            backgroundColor: '#2D333B',
          },
          headerTintColor: '#ADBAC7',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >

        <Drawer.Screen name="Home" >
          {(props) => <Home {...props} data={data} setData={setData} refreshPostCard={refreshPostCard} removePostCard={removePostCard} />}
        </Drawer.Screen>

        <Drawer.Screen name="Criar post" >
          {(props) => <PostMaker {...props} refreshPostCard={refreshPostCard} />}
        </Drawer.Screen>

        <Drawer.Screen name="Editor de post" gestureEnabled="false" >
          {(props) => <PostEditor {...props} refreshPostCard={refreshPostCard} />}
        </Drawer.Screen>

        <Drawer.Screen name="Request ID" >
          {(props) => <SearchId {...props} refreshPostCard={refreshPostCard} removePostCard={removePostCard} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}