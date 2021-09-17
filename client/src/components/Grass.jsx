import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";



// The plane on which plants grow

function Grass(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))


  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => props.sowPlant(event)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <cylinderGeometry args={props.world.grass.geometry}  />
      <meshToonMaterial color={props.world.grass.colour} />
    </mesh>
  )
}

export default Grass
