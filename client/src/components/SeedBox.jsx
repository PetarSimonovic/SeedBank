import { RoundedBox, Text } from '@react-three/drei'
import React, { useRef, useState } from "react";


// Creates a button that 'clicks'

function SeedBox(props) {
  console.log("In SeedBox props are")
  console.log(props)

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
  console.log("In seedSelectors props are")
  console.log(props)
  let seedSelectors = []
  for (let index = 0; index < props.seeds.length; index++) {
    let seed = props.seeds[index]
    seedSelectors.push( <SeedText selectSeed={props.selectSeed} seed={seed} index={index} colours={props.chosenSeed === seed.type ? {text: "#b1b5c8", outline: "#293241"} : {text: "#293241", outline: "#b1b5c8"}}/>)
  }
  return seedSelectors
}

function SeedText(props) {
  const seed = props.seed
  const mesh = useRef()
  const [selected, setSelected] = useState(false)

  const handleClick = (event) => {
    event.stopPropagation()
    console.log(seed.type)
    props.selectSeed(seed.type, props.index)

  }

  return (
      <mesh
        {...props}
        ref={mesh}
        >
        < Text fontSize={0.05} onClick={(event) => handleClick(event)} position={[0.5, props.index/4, 0]} outlineWidth={0.04} outlineColor={props.colours.outline} color={props.colours.text} rotation={[0, 0, 0]} >
          seed: {seed.type} {'\n'}
          quantity: {seed.quantity}
        </ Text>
      </mesh>
      )
    }


export default SeedBox
