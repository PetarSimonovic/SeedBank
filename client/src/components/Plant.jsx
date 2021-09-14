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
      {buildPlant(props)}
    </mesh>
    </group>

  )
}

function buildPlant(props) {

  const stemLength = props.growth/6

  let plant = [
    <Base />,
    <Stem stemLength={stemLength}/>,
  ]

  for (let leaves = 0; leaves <= props.growth; leaves++) {
    plant.push(
    <Leaf color="#377F34" position={[0.02, 0.15 + (leaves/12), 0.05]}/>,
    <Leaf color="#377F34" position={[-0.02, 0.15 + (leaves/12), -0.05]}/>,
  )
  }

  if (props.growth == props.bloom) {
  plant.push(
    <Flower color="#832134" position={[0, 0.15 + (props.growth/8), 0]} />
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
