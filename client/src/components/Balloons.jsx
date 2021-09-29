import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { createId, loadBalloons } from '../functions'
import { Balloon } from './'



function Balloons(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const [balloons, setBalloons] = useState([])
  console.log("Balloons in balloons")
  console.log(balloons)

  useEffect(() => {
    loadBalloons(props.seeds, props.lastLogin, props.userId, props.today).then(data => setBalloons(data))
  }, [])


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
      {createBalloons(props, balloons)}
    </mesh>
    </>
  )
}

function createBalloons(props, balloons) {
  console.log("Balloons in createballoons")
  console.log(balloons)
  const balloonCollection = []
  const {removeBalloon, updateSeeds, seeds} = props

  for (let index = 0; index < balloons.length; index++) {
  const balloon = balloons[index]

  // handleClick for seed balloons

  const handleClick = (props) => {
    updateSeeds(balloon.quantity, balloon.type)
  }

  balloonCollection.push(
    <Balloon
    key={createId()}
    seeds={seeds}
    position={balloon.position}
    index={index}
    handleClick={handleClick}
    colour={balloon.colour}
    type={balloon.type}
    quantity={balloon.quantity}
    message={balloon.message} />
  )
  }
  console.log("Balloon collection")
  console.log(balloonCollection)
  return balloonCollection
}


export default Balloons
