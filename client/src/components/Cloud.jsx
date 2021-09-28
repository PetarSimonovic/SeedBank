import { Billboard, Text } from '@react-three/drei'
import { setDate } from '../functions'
import React, { Component, useState, useRef } from 'react';
import { SeedCloud } from './'


const position = [0.5, 1.7, 3]
const size = 0.5

function Cloud(props) {
  const mesh = useRef()
  const [option, setOption] = useState(0)

  const noticeTextColour = {
    message: "#293241",
    outline: "#b1b5c8"
  }

  const handleClick = () => {
    option >=1 ? setOption(0) : setOption(prev => prev + 1)
    console.log(option)

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
    <Text fontSize={size} outlineWidth={size} outlineColor={noticeTextColour.outline} color={noticeTextColour.message}>
    {displayText(option)}
     </Text>
    </Billboard>
    {displayFunctionality(option, props)}

    </mesh>
)
}

function displayText(option) {

  switch(option) {
    case 0:
      const date = setDate()
      return `${date.day} ${date.month} ${date.year}`
    case 1:
      return 'Choose Seed'
    default:
     return "hello"
  }

}

function displayFunctionality(option, props) {
  switch(option) {
    case 1:
      return <SeedCloud seeds={props.seeds} selectSeed={props.selectSeed} toggleSeeds={props.toggleSeeds} chosenSeed={props.chosenSeed} />
    default:
     return ""
  }
}

export default Cloud
