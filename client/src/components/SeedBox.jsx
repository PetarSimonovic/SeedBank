import { RoundedBox, Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../functions'

// Creates a button that 'clicks'

const seedTextColours = {type: "#293241", outline: "#b1b5c8"}
const selectedSeedTextColours = {type: "#b1b5c8", outline: "#293241"}

function SeedBox(props) {

  const mesh = useRef()





  return (
  <>
  <mesh
    {...props}
    ref={mesh}
    scale={1}
    >
  <SeedBoxStalactite seeds={props.seeds} selectSeed={props.selectSeed}/>
  <SeedButton position={[0, 0.1, 0]} toggleSeeds={props.toggleSeeds}/>
   {seedSelectors(props)}
  </mesh>
  </>


)
}

function seedSelectors(props) {
  console.log("PROPS in SEEDSELECTORS")
  console.log(props)
  if (!props.seedList) {
    return []
  }
  let seedSelectors = []
  let textPosition = 0
  for (let index = 0; index < props.seeds.length; index++) {
    console.log("Generating seedselectors")
    console.log("INDEX " + index)
    let seed = props.seeds[index]
    if (seed.quantity === 0) { continue }
    textPosition++
    let colours = {}
    seed.type === props.chosenSeed ? colours = selectedSeedTextColours : colours = seedTextColours
    seedSelectors.push( <SeedText selectSeed={props.selectSeed} seed={seed} colours={colours} index={index} textPosition={textPosition} position={[0, 0, 0]} />)
  }
  if (seedSelectors.length === 0) {
    seedSelectors.push( <NoSeedText colours={seedTextColours} index={1} />)
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
        <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} >
        < Text
        fontSize={0.05}
        onClick={(event) => handleClick(event)}
        position={[0.5, props.textPosition/4, 0]}
        outlineWidth={0.04}
        outlineColor={props.colours.outline}
        color={props.colours.type}
        rotation={[0, 0, 0]} >
          seed: {seed.type} {'\n'}
          quantity: {seed.quantity}
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
            fontSize={0.05}
            position={[0.5, props.index/4, 0]}
            outlineWidth={0.04}
            outlineColor={props.colours.outline}
            color={props.colours.type}
            rotation={[0, 0, 0]} >
              No seeds available
            </ Text>
            </Billboard>
          </mesh>
        )
  }


function SeedBoxStalactite(props) {

      const mesh = useRef()
      const handleClick = (event) => {
        event.stopPropagation()
      }

      return (
        <group>
        <mesh
          {...props}
          ref={mesh}
          scale={1}
          onClick={(event) => handleClick(event)}
          >
          <cylinderGeometry args={[0.2, 0.01, 0.5, 12]} />
          <meshToonMaterial color={'#6c757d'}  />
        </mesh>
        </group>
      )
    }

export default SeedBox
