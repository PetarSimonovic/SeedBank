import { Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../../functions'
import { Cloud } from '../'

// Creates a button that 'clicks'

const seedTextColours = {type: "#293241", outline: "#b1b5c8"}
const selectedSeedTextColours = {type: "#b1b5c8", outline: "#293241"}
const fontSize = 0.15
const fontZ = 1
const fontY = 2

function SeedCloud(props) {

  const mesh = useRef()
  const seeds = getAvailableSeeds(props.seeds)
  const [option, setOption] = useState(0)
  const [on, setOn] = useState(false)
  const [seed, setSeed] = useState({})
  const [text, setText] = useState("seeds")

  // eventhandler for Cloud

  useEffect(() => {
    setOption(option)
    console.log(option)
    if (seeds.length === 0 || seed.quantity === 0) { closeDown() }
  })


  const closeDown = () => {
    setOn(false)
    setOption(0)
  }

  const handleClick = () => {
    setOn(true)
    console.log(option)
    setOption(prev => prev+1)
    option < seeds.length ? setSeed(seeds[option]) : closeDown()
  }




  return (
  <>
  <mesh
    {...props}
    position={[0, 0.5, 0]}
    ref={mesh}
    scale={1}
    >
    {seeds.length != 0 ? <Cloud handleClick={handleClick} text={on ? seed.type : 'seeds'} /> : '' }
    {on ? seedSelectors(props, seed, option) : ''}
  </mesh>

  </>

)
}

function seedSelectors(props, seed) {
  console.log(seed)
  if (seed.quantity === 0) {
    console.log("It's 0")
    return
  }
  let colours = {}
  seed.type === props.chosenSeed ? colours = selectedSeedTextColours : colours = seedTextColours
  return <SeedText key={createId()} position={[0, 2, 0]} selectSeed={props.selectSeed} toggleSeeds={props.toggleSeeds} seed={seed} colours={colours}   />
}

function SeedText(props) {
  const seed = props.seed
  const mesh = useRef()
  const [selected, setSelected] = useState(false)

  const handleClick = (event) => {
    event.stopPropagation()
    console.log("Clicked on SeedCloud!")
    console.log(seed.type)
    props.selectSeed(seed.type)
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

 function getAvailableSeeds(seeds) {
   let availableSeeds = []
   for (let index = 0; index < seeds.length; index++) {
     const seed = seeds[index]
     if (seed.quantity === 0) {
       continue
     } else {
       availableSeeds.push(seed)
     }
   }
   return availableSeeds
 }

export default SeedCloud
