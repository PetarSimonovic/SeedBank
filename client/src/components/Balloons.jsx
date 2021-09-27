import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { createId } from '../functions'
import { Balloon } from './'



function Balloons(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))

  return (
    <>
    <mesh
      {...props }
      ref={mesh}
      scale={1}
      >
      {createBalloons(props)}
    </mesh>
    </>
  )
}

function createBalloons(props) {
  const balloonCollection = []
  const {balloons, removeBalloon, updateSeeds, seeds} = props

  for (let index = 0; index < balloons.length; index++) {
  const balloon = balloons[index]

  const handleClick = (props) => {
    if (!balloon.claimed) {
    const seedChoice = Math.floor(Math.random() * seeds.length)
    updateSeeds(3, seedChoice)
    removeBalloon(index)
  }
  }

  balloonCollection.push(
    <Balloon
    key={createId()}
    claimed={balloon.claimed}
    seeds={seeds}
    position={balloon.position}
    index={index}
    handleClick={handleClick}
    colour={balloon.colour} />
  )
  }
  return balloonCollection
}


export default Balloons
