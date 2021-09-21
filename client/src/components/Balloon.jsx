import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { SeedBox } from './'

import * as THREE from "three";

function Balloon(props) {
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))
  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={0.8}
      onClick={handleClick}
      >
      <dodecahedronGeometry args={[0.15, 4]} />
      <BalloonCone position={[0, -0.18, 0]}/>
      <BalloonString position={[0, -0.15, 0]}/>
      <SeedBox position={[0, -0.25, 0]}/>
      <meshToonMaterial color={'#db504a'} />
    </mesh>
  )
 }

 function BalloonString(props) {
   const mesh = useRef()
   // Set up state for the hovered and active state


   return (
     <mesh
       {...props}
       ref={mesh}
       scale={1}
       >
       <cylinderGeometry args={[0.005, 0.005, 0.5, 3]} />
       <meshToonMaterial color={'#16161D'} />
     </mesh>
   )
  }

  function BalloonCone(props) {
    const mesh = useRef()
    // Set up state for the hovered and active state


    return (
      <mesh
        {...props}
        ref={mesh}
        scale={1}
        >
        <cylinderGeometry args={[0.15, -0.01, 0.3, 16]} />
        <meshToonMaterial color={'#db504a'} />
      </mesh>
    )
   }


export default Balloon
