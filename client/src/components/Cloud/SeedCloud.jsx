import { Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../../functions'

// Creates a button that 'clicks'

const seedTextColours = {type: "#293241", outline: "#b1b5c8"}
const selectedSeedTextColours = {type: "#b1b5c8", outline: "#293241"}
const fontSize = 0.15
const fontZ = 1
const fontY = 2

function SeedCloud(props) {

  const mesh = useRef()



  return (
  <>
  <mesh
    {...props}
    ref={mesh}
    scale={1}
    >
   {seedSelectors(props)}
  </mesh>
  </>

)
}

function seedSelectors(props) {
  let seedSelectors = []
  let fontX = 0
  for (let index = 0; index < props.seeds.length; index++) {
    let seed = props.seeds[index]
    if (seed.quantity === 0) { continue }
    fontX += 1
    let colours = {}
    seed.type === props.chosenSeed ? colours = selectedSeedTextColours : colours = seedTextColours
    seedSelectors.push( <SeedText key={createId()} selectSeed={props.selectSeed} toggleSeeds={props.toggleSeeds} seed={seed} colours={colours} index={index} fontX={fontX} />)
  }
  if (seedSelectors.length === 0) {
    seedSelectors.push( <NoSeedText key={createId()} colours={seedTextColours} index={1} />)
  }
  return seedSelectors
}


function SeedText(props) {
  const seed = props.seed
  const mesh = useRef()
  const [selected, setSelected] = useState(false)

  const handleClick = (event) => {
    event.stopPropagation()
    props.selectSeed(seed.type, props.index)
    props.toggleSeeds()
  }


  return (
      <mesh
        {...props}
        ref={mesh}
        >
        <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} >
        < Text
        fontSize={fontSize}
        onClick={(event) => handleClick(event)}
        position={[props.fontX, fontY, fontZ]}
        outlineWidth={fontSize}
        outlineColor={props.colours.outline}
        color={props.colours.type}
        rotation={[0, 0, 0]} >
          {seed.type} {'\n'}
          x {seed.quantity}
        </ Text>
        </ Billboard>
      </mesh>
      )
    }

function NoSeedText(props) {
      const mesh = useRef()

      return (
          <mesh
            {...props}
            ref={mesh}
            >
            <Billboard
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} >
            < Text
            fontSize={0.25}
            position={[1, 3, 1]}
            outlineWidth={0.25}
            outlineColor={props.colours.outline}
            color={props.colours.type}
            rotation={[0, 0, 0]} >
              No seeds available
            </ Text>
            </Billboard>
          </mesh>
        )
  }


export default SeedCloud
