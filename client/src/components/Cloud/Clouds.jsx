import { Billboard, Text } from '@react-three/drei'
import { setDate } from '../../functions'
import React, { Component, useState, useRef } from 'react';
import { SeedCloud, CloudKeyBoard, BalloonShop, FriendCloud } from '../'


const position = [0.5, 2.8, 5]
const size = 0.5
const options = 3 // 1 = Choose Seed, 2 = send Friend Request, 3 = buy balloon

function Clouds(props) {
  const mesh = useRef()
  const [option, setOption] = useState(0)

  const noticeTextColour = {
    message: "#293241",
    outline: "#b1b5c8"
  }


return (
  <>
    <SeedCloud seeds={props.seeds} selectSeed={props.selectSeed} toggleSeeds={props.toggleSeeds} chosenSeed={props.chosenSeed} />
    <FriendCloud sendFriendRequest={props.sendFriendRequest} />
    <BalloonShop seeds={props.seeds} buyBalloon={props.buyBalloon} />
  </>
)
}

export default Clouds
