import { Billboard, Text } from '@react-three/drei'
import { setDate } from '../../functions'
import React, { Component, useState, useRef } from 'react';

const position = [0.5, 2.8, 5]
const size = 0.5
const options = 3

function Cloud(props) {
  const mesh = useRef()
  const [option, setOption] = useState(0)

  const noticeTextColour = {
    message: "#293241",
    outline: "#b1b5c8"
  }

  const handleClick = () => {
    console.log("clicked")

  }


return (
  <mesh
    {...props}
    ref={mesh}
    scale={1}
    onClick={handleClick}
    >
  <Billboard
    position={position}
    follow={true}
    lockX={false}
    lockY={false}
    lockZ={false} // Lock the rotation on the z axis (default=false)
    >
    <Text option="Choose Seed" fontSize={size} outlineWidth={size} outlineColor={noticeTextColour.outline} color={noticeTextColour.message}>
    {props.option}
     </Text>
    </Billboard>

    </mesh>
)
}

export default Cloud
