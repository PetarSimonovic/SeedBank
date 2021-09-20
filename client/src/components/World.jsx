import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { createId } from '../functions'
import { Grass } from './'
import * as THREE from "three";


// The plane on which plants grow

function World(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  console.log("WORLD in EARTH is")
  console.log(props)
  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))




  return (
    <>
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      >
      {createStalactites(props)}
    </mesh>
    </>
  )
}

function createStalactites(props) {
  console.log("In create stalactites")
  const world = props.world
  console.log(world)
  const createdStalactites = []

  for (let index = 0; index < world.stalactites.length; index++) {
    const stalactite = world.stalactites[index]
    createdStalactites.push( <Stalactite sowPlant={props.sowPlant} key={createId()} args={stalactite.geometry} position={stalactite.position} color={stalactite.colour} />)
  }

  return createdStalactites
}

function Stalactite(props) {
  const mesh = useRef()
  console.log("PROPS")
  console.log(props)
  console.log("SOWPLANT")
  console.log(props.sowPlant)
  let [top, bottom, depth, sections] = props.args



  return (
    <group>
      <Rock args={props.args} color={props.color} />
      <Grass sowPlant={props.sowPlant} position={[0, depth/2, 0]} args={[top, top, 0.01, sections]} />
    </group>
  )
}

function Rock(props) {

  const mesh = useRef()

  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => handleClick(event)}
      >
      <cylinderGeometry args={props.args} />
      <meshToonMaterial color={props.color}  />
    </mesh>
  )

}

export default World
