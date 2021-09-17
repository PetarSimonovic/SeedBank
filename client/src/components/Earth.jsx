import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


// The plane on which plants grow

function Earth(props) {
  // This reference will give us direct access to the mesh
  const world = props.world
  const mesh = useRef()
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
  return [
    <Stalactite args={world.stalactite1.geometry} position={world.stalactite1.position} colour={world.stalactite1.colour}/>,
    <Stalactite args={world.stalactite2.geometry} position={world.stalactite2.position} colour={world.stalactite2.colour}/>,
    <Stalactite args={world.stalactite3.geometry} position={world.stalactite3.position} colour={world.stalactite3.colour}/>,
    <Stalactite args={world.stalactite4.geometry} position={world.stalactite4.position} colour={world.stalactite4.colour}/>,
    <Stalactite args={world.stalactite5.geometry} position={world.stalactite5.position} colour={world.stalactite5.colour}/>,
    <Stalactite args={world.stalactite6.geometry} position={world.stalactite6.position} colour={world.stalactite6.colour}/>,
    <Stalactite args={world.stalactite7.geometry} position={world.stalactite7.position} colour={world.stalactite7.colour}/>,
    <Stalactite args={world.stalactite8.geometry} position={world.stalactite8.position} colour={world.stalactite8.colour}/>,
    <Stalactite args={world.stalactite9.geometry} position={world.stalactite9.position} colour={world.stalactite9.colour}/>,
    <Stalactite args={world.stalactite10.geometry} position={world.stalactite10.position} colour={world.stalactite10.colour}/>,
  ]
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
      <meshToonMaterial color={props.colour} />
    </mesh>
  )
}

export default Earth
