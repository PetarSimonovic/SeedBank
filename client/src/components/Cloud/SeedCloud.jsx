import { Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../../functions'

// Creates a button that 'clicks'

const seedTextColours = {type: "#293241", outline: "#b1b5c8"}
const selectedSeedTextColours = {type: "#b1b5c8", outline: "#293241"}
const fontSize = 0.12
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
  let availableSeeds = seedCounter(props.seeds)
  for (let index = 0; index < availableSeeds.length; index++) {
    let seed = availableSeeds[index]
    const x = 0.5 + Math.sin(Math.PI * index / availableSeeds.length )
    const y = 2 + Math.cos((Math.PI * index / (availableSeeds.length * 1.5)  ))
    let colours = {}
    seed.type === props.chosenSeed ? colours = selectedSeedTextColours : colours = seedTextColours
    seedSelectors.push( <SeedText key={createId()} position={[x, y, 0]} selectSeed={props.selectSeed} toggleSeeds={props.toggleSeeds} seed={seed} colours={colours} index={index}  />)
  }
  if (seedSelectors.length === 0) {
    seedSelectors.push( <NoSeedText key={createId()} colours={seedTextColours} index={1} />)
  }
  return seedSelectors
}

function seedCounter(seeds) {
  let availableSeeds = []
  for (let index = 0; index < seeds.length; index++) {
    let seed = seeds[index]
    if (seed.quantity === 0) {
      continue
    } else {
      availableSeeds.push(seed)
    }
  }
  return availableSeeds
}


function SeedText(props) {
  const seed = props.seed
  const mesh = useRef()
  const [selected, setSelected] = useState(false)

  const handleClick = (event) => {
    event.stopPropagation()
    props.selectSeed(seed.type, props.index)
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
