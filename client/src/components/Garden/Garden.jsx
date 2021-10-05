import React, { useRef, useEffect, useState } from "react";
import { createId } from '../../functions'
import { Grass, SeedBox, FakeGrass } from '../'
import { Text, Billboard } from '@react-three/drei'


// The plane on which plants grow

function Garden(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))

  const [name, setName] = useState(true)

  const handleClick = (event) => {
    if (props.friend) {
  //  setName(prev => !prev)
    event.stopPropagation()
    props.sendPlant(props.name, props.friendId)
    }
  }

  useEffect(() => {
    setName(name)
  })


  return (
    <>
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => handleClick(event)}
      >
      {createStalactites(props)}
      {name && props.friend ? <GardenText name={props.name} position={[0, 2, 0]} /> : ''}
    </mesh>
    </>
  )
}

function createStalactites(props) {
  const world = props.world
  const createdStalactites = []

  for (let index = 0; index < world.stalactites.length; index++) {
    const stalactite = world.stalactites[index]
    createdStalactites.push( <Stalactite key={createId()} friend={props.friend} sowPlant={props.sowPlant} args={stalactite.geometry} position={stalactite.position} colour={stalactite.colour} />)
  }

  return createdStalactites
}

function Stalactite(props) {
  const mesh = useRef()
  let [top, bottom, depth, sections] = props.args

  const handleClick = (event) => {
    props.friend ? console.log("friend island click") : event.stopPropagation()
  }

  return (
    <group>
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => handleClick(event)}
      >
      <cylinderGeometry args={props.args} />
      <meshToonMaterial color={props.colour}  />
      {props.friend ? <FakeGrass position={[0, depth/2, 0]} args={[top, top, 0.01, sections]} /> : <Grass sowPlant={props.sowPlant} position={[0, depth/2, 0]} args={[top, top, 0.01, sections]} />}
    </mesh>
    </group>
  )
}

function GardenText(props) {

  const gardenTextColor = {
    message: "#293241",
    outline: "#b1b5c8"
  }

  const mesh = useRef()

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={0.8}
      >
      <Text fontSize={1.2} outlineWidth={1} outlineColor={gardenTextColor.outline} color={gardenTextColor.message} > {props.name } </Text>
      </mesh>
  )
}

export default Garden
