import '../style/App.css';
import React, { useState, useEffect, Suspense } from "react";
import { calculateAchievement, saveGarden, sendBalloon, createPlant, loadBalloons, makeFriendRequest, makeFriends, sample } from '../functions'
import { Balloon } from '../gameObjects'
import { Canvas } from "@react-three/fiber";
import { Garden, Camera, Sun, World, Firmament, Friends, Cloud, Balloons, SeedBox, IntroBalloons } from '../components';



// Main page.
// Displays the Garden and the Seed panel, handles interactions between them and updates the user's garden/seedbank


// REFACTOR: avoid assiging state from index as state here (eg useState(props.seeds) - leads to confusion and makes it harder to troubleshoot
// This affects garden and seeds currently, which are loaded via login, passed to state in index, then passed here where they are updated and saved

function SeedBank(props) {

  const [seeds, setSeeds] = useState(props.seeds) //  an array of the player's available seeds
  const [plants, setPlants] = useState(props.garden) //  an array of plant components
  const [chosenSeed, setChosenseed] = useState("") // contains the type of seed if chosen, or null if no seed is currently selected
  const [seedIndex, setSeedindex] = useState(null) //  the index within seeds of the chosenSeed
  const [balloons, setBalloons] = useState([])


  const sowPlant = ( event ) => {
    if (chosenSeed) {
      const newPlant = createPlant(event, chosenSeed)
      setPlants( (prev) => {
        return [newPlant, ...prev]
      })
      removeSeed()
    }
  }

  const removeSeed = () => {
    setChosenseed("")
    updateSeeds(-1, chosenSeed)
    console.log("In removeSeed")
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
    const updatedSeeds = [...seeds]
    const index = updatedSeeds.findIndex(seed => seed.type === type)
    if (index === -1) {
      console.log("adding newSeed " + type)
      setSeeds( (prev) => {
        return [...prev, {type: type, quantity: increment}]
      })
      console.log("SEEDS is now")
      console.log(seeds)
    } else {
      updatedSeeds[index].quantity += increment
      setSeeds(updatedSeeds)
    }
    setSeedindex(null)
  }


  const checkAchievements = () => {
    console.log("CHECKING ACHIEVEMENTS")
    const plantCount = plants.length
    console.log("Plants " + plantCount)
    console.log("Seeds " + seeds.length)
    console.log(plantCount)
    const fivePlants = plantCount % 5
    const achievementCount = plantCount / 5 // how many multuples of five?
    const startingSeeds = 2 // offset for the starting seeds
    const achievementTracker = achievementCount + startingSeeds
    console.log("AchievementTracker " + achievementTracker)
    if (fivePlants === 0 && plantCount !== 0 && seeds.length < achievementTracker) { // if statement checks if plantCount is multiple of 5 and whether the seeds for that multiple have been awarded
      console.log("Achievement!")
      const newSeed = calculateAchievement(seeds, props.id, plantCount)
      updateSeeds(0, newSeed.type)
    }
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


  useEffect(() => {
    checkAchievements()
    saveGarden(props.id, plants, props.world, props.worldChosen, seeds)
  })











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
