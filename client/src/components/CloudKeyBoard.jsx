
import { Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../functions'



const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
const alphabet = characters.split('')
const cloudKeyboardColours = {text: "#293241", outline: "#b1b5c8"}
const cloudFunctionButtonColours = {text: "#b1b5c8", outline: "#293241"}
const fontSize = 0.1
const fontZ = 3




function CloudKeyBoard(props) {

  const [sentenceArray, setSentencearray] = useState([])
  const [sentence, setSentence] = useState('')

  const buildSentence = (character) => {
    setSentencearray( (prev) => {
      return [...prev, character]
    })
  }

  const deleteCharacter = () => {
    console.log(sentenceArray)
    let previousLength = sentenceArray.length - 1
    console.log(previousLength)
    setSentencearray (
      (prev) => {
        return prev.filter((character, index) => index !== previousLength)
      }
    )
    console.log(sentenceArray)
  }

  useEffect(() => {

    console.log("In useEffect")
    //
    console.log(sentenceArray)
    setSentence(sentenceArray.join(''))
    console.log(sentence)
  });


  const mesh = useRef()



  return (
  <>
  {createCloudKeyboard(props, buildSentence, deleteCharacter, sentence) } />
  </>

)
}

function createCloudKeyboard(props, buildSentence, deleteCharacter, sentence) {
  let cloudKeyboard = []
  let fontX = 0.5
  let fontY = 3
  let column = 1
  for (let char = 0; char < alphabet.length; char++) {
    let character = alphabet[char]
    fontX += 0.3
    cloudKeyboard.push( < CloudKey key={createId()} buildSentence={buildSentence} character={character} fontX={fontX} fontY={fontY} /> )
    if (column % 8 === 0) {
      fontY -= 0.3
      fontX = 0.5
    }
    column++

  }
  cloudKeyboard.push( <DeleteKey key={createId()} deleteCharacter={deleteCharacter} fontX={fontX + 0.3} fontY={fontY} /> )
  cloudKeyboard.push( < CloudText key={createId()} sentence={sentence} fontX={0.8} fontY={fontY - 0.3} /> )
  return cloudKeyboard


}

function CloudKey(props) {

    const mesh = useRef()

    const handleClick = (event, character) => {
      event.stopPropagation()
      console.log(character)
      props.buildSentence(character)
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

function DeleteKey(props) {

const mesh = useRef()

const handleClick = (event) => {
event.stopPropagation()
props.deleteCharacter()
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
    outlineColor={cloudFunctionButtonColours.outline}
    color={cloudFunctionButtonColours.text}
     >
     X
    </ Text>
    </ Billboard>
  </mesh>
  )
}

function CloudText(props) {

    const mesh = useRef()

    const handleClick = (event, character) => {
      event.stopPropagation()
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
          outlineColor={cloudFunctionButtonColours.outline}
          color={cloudFunctionButtonColours.text}
           >
           {props.sentence}
          </ Text>
          </ Billboard>
        </mesh>
        )
      }

export default CloudKeyBoard
