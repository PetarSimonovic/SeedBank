import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { createId } from '../../functions'
import { Balloon } from '../'


function IntroBalloons(props) {
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
      <Balloon type="introBalloon" position={[-0.6, 2, 0]} handleClick={props.newWorld} colour="#ee6055" message="New garden" />
      <Balloon type="introBalloon" position={[0.6, 2, 0]} handleClick={props.saveWorld} colour="#ffd97d" message="Save garden" />
    </mesh>
    </>
  )
}

export default IntroBalloons
