import '../style/App.css';
import React, { useState, useEffect, Suspense } from "react";
import { calculateAchievement, saveGarden, createPlant, loadBalloons, makeFriendRequest } from '../functions'
import { Balloon } from '../gameObjects'
import { Canvas } from "@react-three/fiber";
import { Garden, Camera, Sun, World, Firmament, Cloud, Balloons, SeedBox, IntroBalloons } from '../components';



// Main page.
// Displays the Garden and the Seed panel, handles interactions between them and updates the user's garden/seedbank


// REFACTOR: avoid assiging state from index as state here (eg useState(props.seeds) - leads to confusion and makes it harder to troubleshoot
// This affects garden and seeds currently, which are loaded via login, passed to state in index, then passed here where they are updated and saved

function SeedBank(props) {


  const [plants, setPlants] = useState(props.garden) //  an array of plant components
  const [chosenSeed, setChosenseed] = useState("") // contains the type of seed if chosen, or null if no seed is currently selected
  const [seeds, setSeeds] = useState(props.seeds) //  an array of the player's available seeds
  const [seedIndex, setSeedindex] = useState(null) //  the index within seeds of the chosenSeed
  const [balloons, setBalloons] = useState([])


  const sowPlant = ( event ) => {
    if (chosenSeed) {
      const newPlant = createPlant(event, chosenSeed)
      setChosenseed("")
      setPlants( (prev) => {
        return [newPlant, ...prev]
      })
      updateSeeds(-1, chosenSeed)
    }
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
    } else {
      updatedSeeds[index].quantity += increment
      setSeeds(updatedSeeds)
    }
    console.log("Updated seeds")
    console.log(seeds)
    setSeedindex(null)
    console.log("Plants in updatedSeeds")
    console.log(plants.length)
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
      console.log(newSeed)
      setSeeds( (prev) => {
        return [...prev, {type: newSeed.type, quantity: 0}]
      })
    }
  }

  const sendFriendRequest = (sentence) => {
    console.log("FRiend request from " + props.userName)
    makeFriendRequest(props.id, props.userName, sentence)
  }

  useEffect(() => {
    console.log("in uSEEFFECT")
    console.log(seeds)
    console.log(plants.length)
    console.log("Calling saveGarden")
    saveGarden(props.id, plants, props.world, props.worldChosen, seeds)
    checkAchievements()
  }, [plants, seeds]);


  return (
  <div className="App">
    <Canvas id="canvas" camera={{ position: [0, 2, 3.5] }}>
      <Camera />
      <Suspense fallback={console.log("loading")}>
      <Garden
      sowPlant={sowPlant}
      position={[0, 0, 0]}
      world={props.world}
      seeds={seeds}
       />
      {plants}
      <Sun />
      <Firmament />
     </Suspense>
     {props.worldChosen ?
       <>
       <Balloons
        updateSeeds={updateSeeds}
        userId={props.id}
        today={props.today}
        lastLogin={props.lastLogin}
        seeds={seeds} />
       <Cloud
        seeds={seeds}
        chosenSeed={chosenSeed}
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
