import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { SeedBox } from './'
import { createId } from '../functions'


import * as THREE from "three";

function Balloons(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
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
      {createBalloons(props)}
    </mesh>
    </>
  )
}

function createBalloons(props) {
  console.log("In createBalloons")
  const balloonCollection = []
  const {balloons, updateSeeds, seeds} = props
  console.log(balloons)
  for (let index = 0; index < balloons.length; index++) {
  const balloon = balloons[index]
  balloonCollection.push(
    <Balloon
    key={createId()}
    updateSeeds={updateSeeds}
    seeds={seeds}
    position={balloon.position}
    colour={balloon.colour} />
  )
  }
  return balloonCollection
}

function Balloon(props) {
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))
  const handleClick = () => {
    const seedChoice = Math.floor(Math.random() * props.seeds.length)
    props.updateSeeds(3, seedChoice)
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={0.8}
      onClick={handleClick}
      >
      <dodecahedronGeometry args={[0.15, 4]} />
      <BalloonCone colour = {props.colour} position={[0, -0.18, 0]}/>
      <BalloonString position={[0, -0.15, 0]}/>
      <BalloonCrate position={[0, -0.5, 0]}/>
      <meshToonMaterial color={props.colour} />
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
        <meshToonMaterial color={props.colour} />
      </mesh>
    )
   }

   function BalloonCrate(props) {
     const mesh = useRef()
     // Set up state for the hovered and active state


     return (
       <mesh
         {...props}
         ref={mesh}
         scale={1}
         >
         <boxGeometry args={[0.15, 0.15, 0.15]} />
         <meshToonMaterial color={'#7f5539'} />
       </mesh>
     )
    }


export default Balloons
