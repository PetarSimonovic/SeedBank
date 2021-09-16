import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


// The plane on which plants grow

function Earth(props) {
  // This reference will give us direct access to the mesh
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
      <cylinderGeometry args={[1.65, 1, 0.68, 9]}  />
      <meshToonMaterial color={'#8a817c'} />
      {createStalactites()}
    </mesh>
    </>
  )
}

function createStalactites() {
  return [
    <Stalactite args={[1.6, 0.8, 1, 8]} position={[0.1, -0.28, 0, ]} colour={'#6c757d'}/>,
    <Stalactite args={[1.3, 0.5, 1, 7]} position={[-0.1, -0.5, 0.1]} colour={'#495057'} />,
    <Stalactite args={[1.4, 0.55, 1, 4]} position={[-0, -0.7, 0.2]} colour={'#706677'} />,
    <Stalactite args={[0.8, 0.3, 2, 8]} position={[0, -0.9, -0.2]} colour={'#a6b3c7'} />,
    <Stalactite args={[0.4, 0.01, 2, 4]} position={[0, -1.9, -0.5]} colour={'#ced4da'} />,
    <Stalactite args={[0.4, 0.03, 2, 12]} position={[0, -0.9, 1.0]} colour={'#c3baba'} />,
    <Stalactite args={[0.8, 0.2, 1, 8]} position={[-0, -1.3, .40]} colour={'#adb5bd'} />,
    <Stalactite args={[0.6, 0.1, 1, 9]} position={[-0, -1.9, 0.30]} colour={'#c4bbaf'}/>,
    <Stalactite args={[0.4, 0.01, 3, 8]} position={[0, -2.3, 0]} colour={'#ced4da'} />,



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
