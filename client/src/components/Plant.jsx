import React, { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";


function Plant(props) {
  const x = props.x
  const y = props.y
  const z = props.z


  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [growth, setGrowth] = useState(0)


  const handleClick = (event) => {
    event.stopPropagation()
    console.log("This plant is:")
    console.log(props)
  }
  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  //useFrame(() => (mesh.current.rotation.y += 0.002))

  return (
    <group>
    <mesh
      {...props}
      ref={mesh}
      onClick={(event) => handleClick(event)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)} >
      {buildPlant(props.growth)}
    </mesh>
    </group>

  )
}

function buildPlant(growth) {

  const stemLength = growth/5

  let plant = [
    <Base />,
    <Stem stemLength={stemLength}/>,
  ]

  for (let leaves = 0; leaves <= growth; leaves++) {
    plant.push(
    <Leaf color="#377F34" position={[0.02, 0.2 + (stemLength/2), 0.05]}/>,
    <Leaf color="#377F34" position={[-0.02, 0.2 + (stemLength/2), -0.05]}/>
  )
  }

  return plant

}

function Base(props) {

  const mesh = useRef()

  return (
  <mesh
    {...props}
    ref={mesh}
     >
    <dodecahedronGeometry args={[0.08, 2]} />
    <meshToonMaterial color={'#947352'} />
  </mesh>
)


}

function Stem(props) {
  const mesh = useRef()

  return (
  <mesh
    {...props}
    ref={mesh}
    >
    <cylinderGeometry args={[0.02, 0.02, 0.4 + props.stemLength, 7]} />
    <meshToonMaterial color={'#499B4A'} />
    </mesh>
  )
}


function Leaf(props) {
  const mesh = useRef()

  return (
    <mesh
      {...props}
      ref={mesh} >
      <cylinderGeometry
      args={[0.02, 0.08, 0.02, 6]} />
      <meshToonMaterial color={props.color} />
    </mesh>

  )

}

export default Plant
