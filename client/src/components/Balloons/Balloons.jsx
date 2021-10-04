import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { createId, loadBalloons, updateBalloons } from '../../functions'
import { Balloon } from '../'



function Balloons(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const [balloons, setBalloons] = useState([])

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
  const balloonCollection = []
  const {removeBalloon, updateSeeds, acceptFriend, seeds} = props

  for (let index = 0; index < balloons.length; index++) {
  const balloon = balloons[index]

  if (balloon.type === "friendRequest") {

  }
  const handleClick = (props) => {
    // handleClick for seed balloons
    balloon.type === "friendRequest" ? acceptFriend(balloon.sender) : updateSeeds(balloon.quantity, balloon.type)
  }



  balloonCollection.push(
    <Balloon
    key={balloon.balloonId}
    balloonId={balloon.balloonId}
    seeds={seeds}
    position={balloon.position}
    index={index}
    handleClick={handleClick}
    updateBalloons={updateBalloons}
    colour={balloon.colour}
    type={balloon.type}
    sender={balloon.sender}
    quantity={balloon.quantity}
    message={balloon.message} />
  )
  }
  return balloonCollection
}


export default Balloons
