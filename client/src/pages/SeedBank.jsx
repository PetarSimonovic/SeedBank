import '../style/App.css';
import React, { useState, useEffect, Suspense } from "react";
import { addSeeds, updateSeed, calculateAchievement, saveGarden, sendBalloon, createPlant, loadBalloons, makeFriendRequest, makeFriends, sample } from '../functions'
import { Balloon } from '../gameObjects'
import { Canvas } from "@react-three/fiber";
import { Garden, Camera, Sun, World, Firmament, Friends, Cloud, Balloons, SeedBox, IntroBalloons } from '../components';



// Main page.
// Displays the Garden and the Seed panel, handles interactions between them and updates the user's garden/seedbank


// REFACTOR: avoid assiging state from index as state here (eg useState(props.seeds) - leads to confusion and makes it harder to troubleshoot
// This affects garden and seeds currently, which are loaded via login, passed to state in index, then passed here where they are updated and saved

function SeedBank(props) {

  const [plants, setPlants] = useState(props.garden) //  an array of plant components
  const [seeds, setSeeds] = useState(props.seeds) //  an array of the player's available seeds
  const [chosenSeed, setChosenseed] = useState("") // contains the type of seed if chosen, or null if no seed is currently selected
  const [seedIndex, setSeedindex] = useState(null) //  the index within seeds of the chosenSeed
  const [balloons, setBalloons] = useState([])

  // useEffect Hooks run after all the other code, and are then called in order
  // This useEffect runs when seeds change
  useEffect(() => {
    console.log("USE EFFECT SEEDS!")
    console.log("UPDATED SEEDS ARE:")
    console.log(seeds)
  }, [seeds])

  // This useEffect runs when plant is changed

  useEffect(() => {
    console.log("USE EFFECT PLANTS!")
    console.log("NOW CHECKING ACHIEVEMENTS")
    console.log(plants.length)
    plants.length % 5 === 0 && plants.length !== 0 ? console.log(true) : console.log(false)
  }, [plants])


  const sowPlant = ( event ) => {
    if (chosenSeed) {
      console.log("SOW PLANT")
      const newPlant = createPlant(event, chosenSeed)
      setPlants( (prev) => {
        return [newPlant, ...prev]
      })
      removeSeed()
    }
  }

  const removeSeed = () => {
    console.log("REMOVE SEED")
    setChosenseed("")
    updateSeeds(-1, chosenSeed)
    console.log("Seed removed")
    console.log(seeds)
  }

  const selectSeed = (selectedSeed, index) => {
    const seed = seeds[index]
    if (seeds[index].quantity > 0) {
      setChosenseed(selectedSeed)
      setSeedindex(index)
    }
  }

  const updateSeeds = (increment, type) => {
    console.log("UPDATE SEEDS...")
    const index = seeds.findIndex(seed => seed.type === type)
    if (index === -1) {
      console.log("NEW SEED in UPDATE SEEDS")
      console.log("adding newSeed " + type)
      setSeeds( (prev) => {
        return [...prev, {type: type, quantity: increment}]
      })
      addSeeds(props.id, type, increment)
    } else {
      console.log("INCREMENT SEEDS")
      let amendedSeed = seeds[index]
      console.log(amendedSeed)
      amendedSeed.quantity += increment
      setSeeds( (prev) => {
        return [...prev.filter(seed => seed.type !== type), amendedSeed]
      })
      updateSeed(props.id, amendedSeed)
    }
    setSeedindex(null)
  }



  const checkAchievements = () => {
    console.log("CHECK ACHIEVEMENTS")
    const newSeed = calculateAchievement(seeds, props.id, plants.length)
    updateSeeds(0, newSeed.type)
    }

  const sendFriendRequest = (sentence) => {
    makeFriendRequest(props.id, props.userName, sentence, props.world)
  }

  const acceptFriend = (friendName) => {
    makeFriends(props.id, props.userName, friendName, props.world)
  }

  const sendPlant = (friendName, friendId) =>{
    if (chosenSeed) {
      const message = `${props.userName} sent you ${'\n'} a ${chosenSeed} seed!`
      sendBalloon(friendId, chosenSeed, 1, message, props.userName)
      console.log(`Sending ${chosenSeed} to ${friendName} ${friendId}`)
      removeSeed()
    } else {
      console.log("No seed selected")
    }

  }

  const buyBalloon = (colour) => {
    const seed = sample(seeds)
    const message = `Bought: ${seed.type} x 3!`
    sendBalloon(props.id, seed.type, 3, message, "SeedBank", colour)
  }



  return (
  <div className="App">
    <Canvas id="canvas" camera={{ position: [0, 2, 3.5] }}>
      <Camera />
      <Suspense fallback={console.log("loading")}>
      <Garden
      friend={false}
      sowPlant={sowPlant}
      position={[0, 0, 0]}
      world={props.world}
      seeds={seeds}
       />
      {plants}
      <Sun />
      <Firmament />
      <Friends sendPlant={sendPlant} userId={props.id}/>
     </Suspense>
     {props.worldChosen ?
       <>
       <Balloons
        updateSeeds={updateSeeds}
        acceptFriend={acceptFriend}
        userId={props.id}
        today={props.today}
        lastLogin={props.lastLogin}
        seeds={seeds} />
       <Cloud
        seeds={seeds}
        chosenSeed={chosenSeed}
        buyBalloon={buyBalloon}
        position={[0, -0.8, 1]}
        sendFriendRequest={sendFriendRequest}
        selectSeed={selectSeed} />
        </> :
        < IntroBalloons
          saveWorld={props.saveWorld}
          newWorld={props.newWorld}
        /> }
    </Canvas>
  </div>
  );
}

export default SeedBank;
