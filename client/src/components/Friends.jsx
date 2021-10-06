import { Billboard, Text } from '@react-three/drei'
import React, { Component, useState, useRef, useEffect } from 'react';
import { loadFriends, createId } from '../functions'
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
  const friendCollection = []
  for (let index = 0; index < friends.length; index++) {
    const friend = friends[index]
    friendCollection.push(<Garden key={createId()} sendPlant={props.sendPlant} friend={true} position={friend.position} name={friend.name} friendId={friend.friendId} world={friend.world} />)
  }
  return friendCollection
}


export default Friends
