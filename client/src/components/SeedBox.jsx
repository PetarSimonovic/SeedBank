import { RoundedBox, Text } from '@react-three/drei'
import React, { useRef, useState } from "react";


// Creates a button that 'clicks'

function SeedBox(props) {

  const mesh = useRef()
  const [clickScale, setClickscale] = useState(1)

  const [seedindex, setSeedindex] = useState(0)

  const handleClick = () => {
    setClickscale(0.97)
    let index = seedindex + 1
    seedindex >= props.seeds.length - 1 ? setSeedindex(0) : setSeedindex(index)
    setTimeout(() => {
      setClickscale(1)
    }, 100)
  };


return (
  <mesh
  {...props}
  ref={mesh}
  onClick={handleClick}
  scale={clickScale}
  >
  <group>
  <RoundedBox args={[0.2, 0.2, 0.2]} radius={0.05} smoothness={4} {...props}>
  <meshToonMaterial attach="material" color="#212529" />
  </RoundedBox>
  <Text position={[0, 0.4, 0]} outlineWidth={0.04} outlineColor="#b1b5c8" color="#293241" rotation={[0, 0, 0]}>
  seed: {props.seeds[seedindex].type} {'\n'}
  quantity: {props.seeds[seedindex].quantity}
  </Text>
  </group>

  </mesh>

)
}

export default SeedBox
