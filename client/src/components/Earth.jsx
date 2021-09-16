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
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => handleClick(event)}
      >
      <cylinderGeometry args={[1.6, 1.6, 0.6, 25]}  />
      <meshToonMaterial color={'#947352'} />
    </mesh>
  )
}

export default Earth
