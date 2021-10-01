import React, { useRef, useState, useEffect } from "react";
import { Text, Billboard } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import { createId, updateBalloons } from '../functions'



function Balloon(props) {

  const mesh = useRef()
  const [claimed, setClaimed] = useState(false)


  const handleClick = () => {
    if (!claimed) {
      if (props.type !== "introBalloon") { setClaimed(prev => !prev) } // introballoons (save/new world) can't be claimed
      props.handleClick()
      updateBalloons(props.balloonId)
    }
  }

  useEffect(() => {
    setClaimed(claimed)
  }, [])




  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))



  return (
    <group>
    <mesh
      {...props}
      ref={mesh}
      scale={0.8}
      onClick={handleClick}
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
      <BalloonText type={props.type} position={[0, -0.9, 0]} claimed={claimed} message={props.message} />
      </Billboard>
    </mesh>
      </group>

  )
 }

 function BalloonText(props) {

   const ballonTextColour = {
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
       <Text fontSize={0.2} outlineWidth={0.2} outlineColor={ballonTextColour.outline} color={ballonTextColour.message} > {props.claimed || props.type === "introBalloon" ? props.message : "" } </Text>
       </mesh>
   )
 }


 function BalloonBody(props) {

   const mesh = useRef()
   useFrame((state, delta) => ( mesh.current.rotation.y += 0.01))


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
   useFrame((state, delta) => ( mesh.current.rotation.y += 0.01))

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
    useFrame((state, delta) => ( mesh.current.rotation.y += 0.01))

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
     useFrame((state, delta) => ( mesh.current.rotation.y += 0.01))

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
