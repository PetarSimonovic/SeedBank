import React, { useRef } from "react";



// The plane on which plants grow

function FakeGrass(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))


  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      >
      <cylinderGeometry args={props.args} />
      <meshToonMaterial color={'#a7c957'} />
    </mesh>
  )
}

export default FakeGrass
