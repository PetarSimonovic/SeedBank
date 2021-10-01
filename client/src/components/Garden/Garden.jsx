import React, { useRef } from "react";
import { createId } from '../../functions'
import { Grass, SeedBox } from '../'


// The plane on which plants grow

function Garden(props) {
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
      {createStalactites(props)}
    </mesh>
    </>
  )
}

function createStalactites(props) {
  const world = props.world
  const createdStalactites = []

  for (let index = 0; index < world.stalactites.length; index++) {
    const stalactite = world.stalactites[index]
    createdStalactites.push( <Stalactite key={createId()} sowPlant={props.sowPlant} args={stalactite.geometry} position={stalactite.position} colour={stalactite.colour} />)
  }

  return createdStalactites
}

function Stalactite(props) {
  const mesh = useRef()
  let [top, bottom, depth, sections] = props.args

  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <group>
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => handleClick(event)}
      >
      <cylinderGeometry args={props.args} />
      <meshToonMaterial color={props.colour}  />
      <Grass sowPlant={props.sowPlant} position={[0, depth/2, 0]} args={[top, top, 0.01, sections]} />
    </mesh>
    </group>
  )
}


export default Garden
