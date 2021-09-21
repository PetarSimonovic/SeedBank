import { RoundedBox } from '@react-three/drei'
import React, { useRef, useState, useMemo, delay } from "react";
import * as THREE from "three";


// Creates a button that 'clicks'

function SeedBox(props) {
  const mesh = useRef()
  const [clickScale, setClickscale] = useState(1)

  const handleClick = () => {
    setClickscale(0.9)
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
  <RoundedBox args={[0.18, 0.18, 0.18]} radius={0.05} smoothness={4} {...props}>
  <meshToonMaterial attach="material" color="#7f5539" />
  </RoundedBox>

  </mesh>

)
}

export default SeedBox
