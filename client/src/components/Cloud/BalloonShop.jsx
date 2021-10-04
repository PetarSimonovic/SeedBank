import { Billboard, Text } from '@react-three/drei'
import React, { Component, useState, useRef } from 'react';
import {balloonColours, sendBalloon, sample} from '../../functions'
const size = 0.1

function BalloonShop(props) {
  const mesh = useRef()

  const handleClick = () => {

  }

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={handleClick}
      >
    {balloonsForSale(props)}
    </mesh>
  )
}

function balloonsForSale(props) {
  console.log("In balloonsForSale" )
  const colours = balloonColours()
  let balloons = []
  for (let balloon = 0; balloon < props.seeds.length; balloon++) {
    const ballonTextColour = {
      message: "#293241",
      outline: "#b1b5c8"
    }
    const x = Math.cos(Math.PI * balloon / colours.length)
    const y = 1 + Math.sin((Math.PI * balloon / colours.length  ))

    balloons.push(<BalloonForSale buyBalloon={props.buyBalloon} textColour="#293241" outline={colours[balloon]} position={[x, y, 0]}/>)
  }
  console.log(balloons)
  return balloons
}

function BalloonForSale(props) {

  const mesh = useRef()
  const [scale, setScale] = useState(1)

  const handleClick = (event) => {
    event.stopPropagation()
    console.log(props)
    props.buyBalloon(props.outline)
    setScale(0.95)
    setTimeout(() => {
      setScale(1)
    }, 100)

    //  constructor(userId, type, colour = sample(balloonColours()), quantity = 0, message, sender = "SeedBank") {
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={(event) => handleClick(event)}
      >
    <Billboard
      position={props.position}
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
      >
      <Text fontSize={size} outlineWidth={size} outlineColor={props.outline} color={props.textColour}>
      £1
       </Text>
      </Billboard>
      </mesh>
    )
}

export default BalloonShop
