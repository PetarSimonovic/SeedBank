
import { Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../functions'



const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
const alphabet = characters.split('')
const cloudKeyboardColours = {text: "#293241", outline: "#b1b5c8"}
const fontSize = 0.1
const fontZ = 3




function CloudKeyBoard(props) {

  console.log("Props in FriendCloud")
  console.log(props)

  const mesh = useRef()



  return (
  <>
  {createCloudKeyboard(props)}
  </>

)
}

function createCloudKeyboard(props) {
  let cloudKeyboard = []
  console.log(alphabet)
  let fontX = 0.5
  let fontY = 3
  let column = 1
  for (let char = 0; char < alphabet.length; char++) {
    let character = alphabet[char]
    fontX += 0.3
    cloudKeyboard.push( < CloudKey key={createId()} character={character} fontX={fontX} fontY={fontY} /> )
    if (column % 6 === 0) {
      fontY -= 0.3
      fontX = 0.5
    }
    column++

  }
  console.log(cloudKeyboard)
  return cloudKeyboard

}

function CloudKey(props) {

    const mesh = useRef()

    const handleClick = (event, character) => {
      event.stopPropagation()
      console.log(character)
    }

    return (
        <mesh
          {...props}
          ref={mesh}
          onClick={(event) => handleClick(event, props.character)}
          >
          <Billboard
          follow={true}
          lockX={false}
          lockY={false}
          lockZ={false} >
          < Text
          fontSize={fontSize}
          position={[props.fontX, props.fontY, fontZ]}
          outlineWidth={fontSize}
          outlineColor={cloudKeyboardColours.outline}
          color={cloudKeyboardColours.text}
           >
           {props.character}
          </ Text>
          </ Billboard>
        </mesh>
        )
      }

export default CloudKeyBoard
