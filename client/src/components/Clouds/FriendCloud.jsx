import { Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../../functions'
import { Cloud, CloudKeyBoard} from '../'


function FriendCloud(props) {

  //const seedTypes = getSeedTypes(props.seeds)
  const [option, setOption] = useState(0)
  const [text, setText] = useState('friend request')
  const [on, setOn] = useState(false)
  const mesh = useRef()

  // eventhandler for Cloud

  const handleClick = () => {
    setOn(prev => !prev)
  }

  useEffect(() => {
    on ? setText("enter name") : setText("friend request")
  }, [on])

  return (
  <>
  <mesh
    {...props}
    position={[-5, 0.5, 0]}
    ref={mesh}
    scale={1}
    >
    <Cloud handleClick={handleClick} text={text} />
    {on ? <CloudKeyBoard handleSubmit={props.sendFriendRequest} /> : '' } //-1 offsets for "seeds" text - this could prob be neater
  </mesh>
  </>

)
}

export default FriendCloud
