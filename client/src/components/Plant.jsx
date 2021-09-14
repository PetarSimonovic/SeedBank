import React, { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";


function Plant(props) {
  console.log("Plant props")
  console.log(props)
  const {x, y, z} = props


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
      {buildPlant({growth: 2, bloom: 2, date: Object, position: [-0.4857805246115523, 0.15000000596046448, -0.83316294107687]})}
    </mesh>
    </group>

  )
}

function buildPlant(props) {

  let {growth, bloom} = props
  let flower = false
  if (growth >= bloom) {
    flower = true
    growth = bloom
  }


  const stemLength = growth/6

  let plant = [
    <Base />,
    <Stem stemLength={stemLength}/>,
  ]

  for (let leaves = 0; leaves <= growth; leaves++) {
    plant.push(
    <Leaf color="#377F34" position={[0.02, 0.15 + (leaves/12), 0.05]}/>,
    <Leaf color="#377F34" position={[-0.02, 0.15 + (leaves/12), -0.05]}/>,
  )
  }

  if (growth >= bloom) {
  plant.push(
    <Flower color="#832134" position={[0, 0.15 + (growth/8), 0]} />
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
      <cylinderGeometry args={[0.02, 0.06, 0.02, 6]} />
      <meshToonMaterial color={props.color} />
    </mesh>

  )

}

function Flower(props) {

  const mesh = useRef()

  return (
    <mesh
      {...props}
      ref={mesh} >
      <dodecahedronGeometry args={[0.06]} />
      <meshToonMaterial color={props.color} />
    </mesh>

  )

}



export default Plant
