import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import Background from '../../components/Background';
import CardPost from '../../components/CardPost';
import getData from '../../services/getData'

export default function Home() {
  const [data, setData] = useState([])

  /*function removePostCard(id) {
    const posts = data
    const post = posts.filter(post => post.id === id)
    console.log(post)
    if (post[0].id === id) {
      console.log(post)
      posts.splice(post, 1)
      console.log(posts)
    }
  }*/

  function generateCardPost() {
    getData()
      .then(apiData => apiData.map(element => <CardPost key={element.id} title={element.title} body={element.body} id={element.id} userId={element.userId} />))
      .then(apiData => console.log(apiData))
    //getData().then(apiData => setData(apiData))
  }

  return (
    <Background>
      <StatusBar style="auto" />
      {generateCardPost()}
    </Background>
  );
}