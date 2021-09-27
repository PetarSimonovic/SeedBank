import { RoundedBox, Text } from '@react-three/drei'
import React, { useRef, useState } from "react";


// Creates a button that 'clicks'

function SeedBox(props) {

  const mesh = useRef()
  const [clickScale, setClickscale] = useState(1)

  const [seedSelect, setSeedselect] = useState(false)

  const handleClick = () => {
    setClickscale(0.97)
    setSeedselect(prev => !prev)
    setTimeout(() => {
      setClickscale(1)
    }, 100)
  };


return (
  <>
  <mesh
  {...props}
  ref={mesh}
  onClick={handleClick}
  scale={clickScale}
  >
  <RoundedBox args={[0.2, 0.2, 0.2]} radius={0.05} smoothness={4} {...props}>
  <meshToonMaterial attach="material" color="#212529" />
  </RoundedBox>
  </mesh>
  {seedSelectors(props, seedSelect)}
  </>


)
}

function seedSelectors(props, seedSelect) {
  if (!seedSelect) {
    return
  }
  let seedSelectors = []
  for (let index = 0; index < props.seeds.length; index++) {
    let seed = props.seeds[index]
    seedSelectors.push( <SeedText seed={seed} index={index} />)
  }
  return seedSelectors
}

function SeedText(props) {
  const seed = props.seed
  const mesh = useRef()

  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
      <mesh
        {...props}
        ref={mesh}
        >
        < Text fontSize={0.05} position={[0.5, props.index/4, 0]} outlineWidth={0.04} outlineColor="#b1b5c8" color="#293241" rotation={[0, 0, 0]} >
          seed: {seed.type} {'\n'}
          quantity: {seed.quantity}
        </ Text>
      </mesh>
      )
    }

export default SeedBox
