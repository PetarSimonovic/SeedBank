import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { createId } from '../functions'
import { Balloon } from './'

const handleClick = (props) => {
  if (!props.claimed) {
  const seedChoice = Math.floor(Math.random() * props.seeds.length)
  props.updateSeeds(3, seedChoice)
  props.removeBalloon(props.index)
}
}

function Balloons(props) {
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
  balloonCollection.push(
    <Balloon
    key={createId()}
    claimed={balloon.claimed}
    updateSeeds={updateSeeds}
    removeBalloon={removeBalloon}
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
