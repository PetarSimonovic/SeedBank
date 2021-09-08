import React, { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";


function Plant(props) {
  const x = props.x
  console.log("Plant added")
  // This reference will give us direct access to the mesh
  const [growth, setGrowth] = useState(0)
  const mesh = useRef()
  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  //useFrame(() => (mesh.current.rotation.y += 0.002))

  return (
    <group>
    <mesh
      {...props}
      ref={mesh} >
      <dodecahedronGeometry args={[0.12, 2]} />
      <meshToonMaterial color={'#947352'} />
    </mesh>
    <mesh
      {...props}
      ref={mesh} >
      <cylinderGeometry args={[0.02, 0.02, 0.4, 7]} />
      <meshToonMaterial color={'#499B4A'} />
      </mesh>
    </group>

  )
}


function Leaf(props) {
  const mesh = useRef()

  return (
    <group>
    <mesh
      {...props}
      ref={mesh} >
      <circleGeometry args={[0.8, 7]} />
      <meshToonMaterial color={'#358856'} />
    </mesh>
    </group>

  )

}

export default Plant
