import { RoundedBox, Text } from '@react-three/drei'
import React, { useRef, useState, useMemo, delay } from "react";
import * as THREE from "three";


// Creates a button that 'clicks'

function SeedBox(props) {
  
  const mesh = useRef()
  const [clickScale, setClickscale] = useState(1)

  const handleClick = () => {
    setClickscale(0.97)
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
  <RoundedBox args={[0.5, 0.5, 0.5]} radius={0.05} smoothness={4} {...props}>
  <meshToonMaterial attach="material" color="#7f5539" />
  </RoundedBox>
  <Text position={[0, 0.46, 0]} color="black" rotation={[4.713, 0, 0]}> Seeds </Text>
  </group>

  </mesh>

)
}

export default SeedBox
