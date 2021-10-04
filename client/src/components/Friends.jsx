import { Billboard, Text } from '@react-three/drei'
import React, { Component, useState, useRef, useEffect } from 'react';
import { loadFriends } from '../functions'
import { Garden } from './'

// generates a floating garden for each friend and places it in the background
// uses the same Garden generation code as the user garden, except FakeGrass can't be planted (probably could merge this with Grass)

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
  console.log(props.sendPlant)
  console.log(friends)
  const friendCollection = []
  for (let index = 0; index < friends.length; index++) {
    const friend = friends[index]
    console.log(friend)
    friendCollection.push(<Garden sendPlant={props.sendPlant} friend={true} position={friend.position} name={friend.name} friendId={friend.friendId} world={friend.world} />)
  }
  console.log("CREATED FRIENDS")
  console.log(friendCollection)
  return friendCollection
}


export default Friends