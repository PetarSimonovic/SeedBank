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
  </>
)
}

function displayText(option) {

  switch(option) {
    case 0:
      const date = setDate()
      return `   | | ${'\n'} \\__/ `
    case 1:
      return 'Choose Seed'
    case 2:
      return 'Send friend request'
    case 3:
      return 'Buy balloon'
    default:
     return "hello"
  }

}

function displayFunctionality(option, props) {

  switch(option) {
    case 1:
      return
    case 2:
      return
    case 3:
      if (props.seeds.length > 0) {
        return <BalloonShop seeds={props.seeds} buyBalloon={props.buyBalloon} />
      }
    default:
     return ""
  }
}

export default Clouds
