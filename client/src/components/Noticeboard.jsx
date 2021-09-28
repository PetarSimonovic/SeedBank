import { Billboard, Text } from '@react-three/drei'
import { setDate } from '../functions'
import React, { Component, useState, useRef } from 'react';
import { SeedBox } from './'




function Noticeboard(props) {
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
    position={[0.5, 1, 6]}
    follow={true}
    lockX={false}
    lockY={false}
    lockZ={false} // Lock the rotation on the z axis (default=false)
    >
    <Text fontSize={0.5} outlineWidth={0.4} outlineColor={noticeTextColour.outline} color={noticeTextColour.message}>
    {displayOption(option)}
     </Text>
    </Billboard>
    {option === 1 ? <SeedBox seeds={props.seeds} selectSeed={props.selectSeed} toggleSeeds={props.toggleSeeds} chosenSeed={props.chosenSeed} /> : ''}

    </mesh>
)
}

function displayOption(option) {

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

export default Noticeboard
