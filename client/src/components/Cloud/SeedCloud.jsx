import { Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../../functions'
import { Cloud } from '../'

// Creates a button that 'clicks'

const seedTextColours = {type: "#293241", outline: "#b1b5c8"}
const selectedSeedTextColours = {type: "#b1b5c8", outline: "#293241"}
const fontSize = 0.12
const fontZ = 1
const fontY = 2

function SeedCloud(props) {

  //const seedTypes = getSeedTypes(props.seeds)
  const [option, setOption] = useState(0)
  const [text, setText] = useState('seeds')
  const [on, setOn] = useState(false)
  const mesh = useRef()

  // eventhandler for Cloud

  const handleClick = () => {
    console.log(option, props.seeds.length)
    console.log(props.seeds)
    setOn(true)
    option > props.seeds.length - 1 ? closeDown() : updateOption()
    console.log(option, props.seeds.length)

  }

  const updateOption = () => {
    setOption(prev => prev + 1)
    setText(props.seeds[option].type)
  }

  const closeDown = () => {
    setOn(false)
    setOption(0)
    setText('seeds')
  }


  return (
  <>
  <mesh
    {...props}
    position={[0, 0.5, 0]}
    ref={mesh}
    scale={1}
    >
    <Cloud handleClick={handleClick} text={text} />
    {on ? seedSelectors(props, option - 1) : '' } //-1 offsets for "seeds" text - this could prob be neater
  </mesh>
  </>

)
}

function seedSelectors(props, index) {
  console.log("In seed selectors")
  let seed = props.seeds[index]
  console.log(seed)
  if (seed.quantity === 0) { return }
  let colours = {}
  seed.type === props.chosenSeed ? colours = selectedSeedTextColours : colours = seedTextColours
  return <SeedText key={createId()} position={[0, 2, 0]} selectSeed={props.selectSeed} toggleSeeds={props.toggleSeeds} seed={seed} colours={colours} index={index}  />
}

function SeedText(props) {
  const seed = props.seed
  const mesh = useRef()
  const [selected, setSelected] = useState(false)

  const handleClick = (event) => {
    event.stopPropagation()
    console.log("Clicked on SeedCloud!")
    console.log(seed.type)
    console.log(props.index)
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
          {seed.quantity}
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

function getSeedTypes(seeds) {
  console.log("getting seeds")
  let seedTypes = ["seeds"]
  for (let index = 0; index < seeds.length; index++) {
    const seed = seeds[index]
    seedTypes.push(seed.type)
  }
  console.log(seedTypes)
  return seedTypes
}

export default SeedCloud
