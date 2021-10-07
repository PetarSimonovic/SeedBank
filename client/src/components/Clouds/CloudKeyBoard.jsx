
import { Text, Billboard } from '@react-three/drei'
import React, { useRef, useState, useEffect } from "react";
import { createId } from '../../functions'



const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
const alphabet = characters.split('')
const cloudKeyboardColours = {text: "#293241", outline: "#b1b5c8"}
const cloudFunctionButtonColours = {text: "#b1b5c8", outline: "#293241"}
const fontSize = 0.1
const fontZ = 1




function CloudKeyBoard(props) {
  const [sentenceArray, setSentencearray] = useState([])
  const [sentence, setSentence] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const buildSentence = (character) => {
    setSentencearray( (prev) => {
      return [...prev, character]
    })
  }

  const deleteCharacter = () => {
    let previousLength = sentenceArray.length - 1
    setSentencearray (
      (prev) => {
        return prev.filter((character, index) => index !== previousLength)
      }
    )
  }

  const submit = () => {
    setSubmitted(true)
    props.handleSubmit(sentence)
  }

  useEffect(() => {

    //
    setSentence(sentenceArray.join(''))
    setSubmitted(submitted)
  });


  const mesh = useRef()



  return (
  <>
  {submitted ? < CloudText key={createId()} sentence={sentence} fontX={0.8} fontY={1.8} /> : createCloudKeyboard(props, buildSentence, deleteCharacter, sentence, submit) } />
  </>

)
}

function createCloudKeyboard(props, buildSentence, deleteCharacter, sentence, submit) {
  let cloudKeyboard = []
  let fontX = 0
  let fontY = 3
  let column = 1
  for (let char = 0; char < alphabet.length; char++) {
    let character = alphabet[char]
    fontX += 0.3
    cloudKeyboard.push( < CloudKey key={createId()} buildSentence={buildSentence} character={character} fontX={fontX} fontY={fontY} /> )
    if (column % 8 === 0) {
      fontY -= 0.3
      fontX = 0
    }
    column++

  }
  cloudKeyboard.push( <FunctionKey key={createId()} handleClick={deleteCharacter} fontX={fontX + 0.3} fontY={fontY} character='X' /> )
  cloudKeyboard.push( <FunctionKey key={createId()} handleClick={submit} fontX={fontX + 0.6} fontY={fontY} character='+'/>)
  cloudKeyboard.push( < CloudText key={createId()} sentence={sentence} fontX={0.8} fontY={fontY - 0.3} /> )

  return cloudKeyboard


}

function CloudKey(props) {

    const mesh = useRef()

    const handleClick = (event, character) => {
      event.stopPropagation()
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

function FunctionKey(props) {

// FunctionKey Receives a 'handleclick' prop that can vary according to functions
// Varies in colour to cloudkey but other than that the two could prob be merged into single component

const mesh = useRef()

const handleClick = (event) => {
event.stopPropagation()
props.handleClick()
}

return (
  <mesh
    {...props}
    ref={mesh}
    onClick={(event) => handleClick(event)}
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
     {props.character}
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
