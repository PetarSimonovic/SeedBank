import { Billboard, Text } from '@react-three/drei'
import React, { Component, useState, useRef, useEffect } from 'react';
import {balloonColours, sendBalloon, sample, createId} from '../../functions'
import { Cloud } from '../'
const size = 0.07

function BalloonShop(props) {
  const mesh = useRef()

  const [on, setOn] = useState(false)
  const [text, setText] = useState('balloon shop')

  // eventhandler for Cloud

  const handleClick = () => {
    setOn(prev => !prev)
  }

  useEffect(() => {
    on ? setText("choose balloon") : setText("balloon shop")
  }, [on])


  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      position={[5, 0.5, 0]}
      onClick={handleClick}
      >
    <Cloud handleClick={handleClick} text={text} />
    {on ? balloonsForSale(props) : '' }
    </mesh>
  )
}

function balloonsForSale(props) {
  const colours = balloonColours()
  let balloons = []
  for (let balloon = 0; balloon < props.seeds.length; balloon++) {
    const ballonTextColour = {
      message: "#293241",
      outline: "#b1b5c8"
    }
    const x = -2.5 + Math.cos(Math.PI * balloon / colours.length)
    const y = 0 + Math.sin((Math.PI * balloon / colours.length  ))

    balloons.push(<BalloonForSale key={createId()} buyBalloon={props.buyBalloon} textColour="#293241" outline={colours[balloon]} position={[x, y, 0]}/>)
  }
  return balloons
}

function BalloonForSale(props) {

  const mesh = useRef()
  const [scale, setScale] = useState(1)

  const handleClick = (event) => {
    event.stopPropagation()
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
      <Text fontSize={size} outlineWidth={size + 0.05} outlineColor={props.outline} color={props.textColour}>
      £1
       </Text>
      </Billboard>
      </mesh>
    )
}

export default BalloonShop
