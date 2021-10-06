
import React, { useRef, useEffect, useState } from "react";
import { createId } from '../../functions'
import { Plant } from '../'
import { Text, Billboard } from '@react-three/drei'


// The plane on which plants grow

function Plants(props) {
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
      {createPlants(props)}
    </mesh>
    </>
  )
}

function createPlants(props) {
  let plants = props.plants
  let plantCollection = []
  for (let index = 0; index < plants.length; index++) {
    console.log("CREATIN PLANT")
    console.log(plants)
    let plant = plants[index]
    plantCollection.push(<Plant key={createId()} plantId={plant.plantId} growth={plant.growth} date={plant.date} position={plant.position} type={plant.type} />)
  }
  return plantCollection
}

export default Plants
