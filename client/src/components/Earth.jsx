import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { createId } from '../functions'
import * as THREE from "three";


// The plane on which plants grow

function Earth(props) {
  // This reference will give us direct access to the mesh
  const world = props.world
  const mesh = useRef()
  console.log("WORLD in EARTH is")
  console.log(world)
  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))

  const handleClick = (event) => {
    event.stopPropagation()
  }


  return (
    <>
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => handleClick(event)}
      >
      <cylinderGeometry args={world.earth.geometry}  />
      <meshToonMaterial color={world.earth.colour} />
      {createStalactites(world)}
    </mesh>
    </>
  )
}

function createStalactites(world) {
  console.log("In create stalactites")
  console.log(world)
  const createdStalactites = []

  for (let index = 0; index < world.stalactites.length; index++) {
    const stalactite = world.stalactites[index]
    createdStalactites.push(<Stalactite key={createId()} args={stalactite.geometry} position={stalactite.position} colour={stalactite.colour} />)
  }

  return createdStalactites
}

function Stalactite(props) {
  const mesh = useRef()

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      >
      <cylinderGeometry args={props.args} />
      <meshToonMaterial color={props.colour}  />
    </mesh>
  )
}

export default Earth
