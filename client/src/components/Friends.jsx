import { Billboard, Text } from '@react-three/drei'
import React, { Component, useState, useRef, useEffect } from 'react';
import { loadFriends } from '../functions'

function Friends(props) {

  const [friends, setFriends] = useState([])
  const mesh = useRef()

  useEffect(() => {
    loadFriends(props.userId).then(data => setFriends(data))
  }, [])

  return (
    <>
    <mesh
      {...props }
      ref={mesh}
      scale={1}
      >
      {createFriends(props, friends)}
    </mesh>
    </>
  )
}

function createFriends(props, friends) {
  console.log("In createFriends")
  console.log(friends)
  const friendCollection = []
  for (let index = 0; index < friends.length; index++) {
    const friend = friends[index]
    console.log(friend)
    friendCollection.push(<Text> Hello </Text>)
  }

  return friendCollection
}


export default Friends
