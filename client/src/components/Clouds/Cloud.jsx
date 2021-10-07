import { Billboard, Text } from '@react-three/drei'
import { setDate } from '../../functions'
import React, { Component, useState, useRef } from 'react';

const position = [0.5, 2.8, 5]
const size = 0.5
const options = 3

function Cloud(props) {
  const mesh = useRef()

  const noticeTextColour = {
    message: "#293241",
    outline: "#b1b5c8"
  }

  const handleClick = (event) => {
    event.stopPropagation()
    props.handleClick()
  }



return (
  <mesh
    {...props}
    ref={mesh}
    scale={1}
    onClick={(event) => handleClick(event)}
    >
  <Billboard
    position={position}
    follow={true}
    lockX={false}
    lockY={false}
    lockZ={false} // Lock the rotation on the z axis (default=false)
    >
    <Text fontSize={size} outlineWidth={size} outlineColor={noticeTextColour.outline} color={noticeTextColour.message}>
    {props.text}
     </Text>
    </Billboard>

    </mesh>
)
}

export default Cloud
