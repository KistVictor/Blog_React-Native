import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import Background from '../../components/Background';
import CardPost from '../../components/CardPost.jsx';

import {api} from '../../services/api'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await api.get('https://jsonplaceholder.typicode.com/posts')
      setData(response.data)
    }
    getData()
  }, [])

  console.log(data)
  
  return (
    <Background>
      <StatusBar style="auto" />
      {data.map((element) => <CardPost key={element.id} title={element.title} body={element.body} id={element.id} userId={element.userId} />)}
      
    </Background>
  );
}