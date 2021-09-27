import { RoundedBox, Text } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../functions'

// Creates a button that 'clicks'

function SeedBox(props) {
  const [seedSelect, setSeedselect] = useState(false)


  const toggleSeeds = () => {
    setSeedselect(!seedSelect)
    console.log("Toggling")
    console.log(seedSelect)
  }

  return (
  <>
  <SeedButton position={[0, 0.1, 0]} toggleSeeds={toggleSeeds}/>
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
    seedSelectors.push( <SeedText selectSeed={props.selectSeed} seed={seed} index={index} />)
  }
  return seedSelectors
}

function SeedButton(props) {

  const mesh = useRef()
  const [clickScale, setClickscale] = useState(1)

  const handleClick = () => {
    setClickscale(0.97)
    props.toggleSeeds()
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
  <RoundedBox onClick={handleClick} args={[0.2, 0.2, 0.2]} radius={0.05} smoothness={4} {...props}>
  <meshToonMaterial attach="material" color="#212529" />
  </RoundedBox>
  </mesh>
  </>
  )
}

function SeedText(props) {
  const seed = props.seed
  const mesh = useRef()
  const [selected, setSelected] = useState(false)
  const [colours, setColours] = useState(["#b1b5c8", "#293241"])

  const handleClick = (event) => {
    event.stopPropagation()
    console.log(seed.type)
    props.selectSeed(seed.type, props.index)
    seed.quantity > 0 ? setColours(["#293241", "#b1b5c8"]) : setColours(["#293241", "#b1b5c8"])
  }



  return (
      <mesh
        {...props}
        ref={mesh}
        >
        < Text
        fontSize={0.05}
        onClick={(event) => handleClick(event)}
        position={[0.5, props.index/4, 0]}
        outlineWidth={0.04}
        outlineColor={colours[0]}
        color={colours[1]}
        rotation={[0, 0, 0]} >
          seed: {seed.type} {'\n'}
          quantity: {seed.quantity}
        </ Text>
      </mesh>
      )
    }


export default SeedBox
