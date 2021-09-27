import React, { useRef } from "react";
import { Text, Billboard } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import { createId } from '../functions'



function Balloon(props) {

  const mesh = useRef()
  const ballonTextColour = {
    message: "#293241",
    outline: "#b1b5c8"
  }


  useFrame((state, delta) => ( mesh.current.rotation.y += 0.01))


  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))



  return (
    <group>
    <mesh
      {...props}
      ref={mesh}
      scale={0.8}
      onClick={props.handleClick}
      >
      <BalloonBody colour={props.colour} />
      <BalloonCone colour = {props.colour} position={[0, -0.18, 0]}/>
      <BalloonString position={[0, -0.15, 0]}/>
      <BalloonCrate position={[0, -0.48, 0]}/>
      <Billboard
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false} >
      <Text position={[0, -0.7, 0]} fontSize={0.09} outlineWidth={0.04} outlineColor={ballonTextColour.outline} color={ballonTextColour.message} claimed={true} > {props.message} </Text>
      </Billboard>
    </mesh>
      </group>

  )
 }


 function BalloonBody(props) {

   const mesh = useRef()

   return (
     <mesh
       {...props}
       ref={mesh}
       scale={1}
       >
   <dodecahedronGeometry args={[0.153, 8]} />
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

export default Balloon
