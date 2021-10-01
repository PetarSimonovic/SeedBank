import '../style/App.css';
import React, { useState, useEffect, Suspense } from "react";
import { calculateAchievement, saveGarden, createPlant, loadBalloons } from '../functions'
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
      checkAchievements(plants.length)
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
      setSeeds( (prev) => {return [{type: type, quantity: increment}, ...prev]})
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


  const checkAchievements = (plantCount) => {
    console.log("CHECKING ACHIEVEMENTS")
    console.log(plantCount)
    const fivePlants = plantCount % 5
    const achievementCount = plantCount / 5 // how many multuples of five?
    const startingSeeds = 2 // offset for the starting seeds
    if (fivePlants === 0) {
      console.log("Achievement!")
      const newSeed = calculateAchievement(seeds, props.id, plantCount)
      console.log(newSeed)
      updateSeeds(0, newSeed.type)

    }
  }

  useEffect(() => {
    console.log("in uSEEFFECT")
    console.log(seeds)
    console.log("Calling saveGarden")
    saveGarden(props.id, plants, props.world, props.worldChosen, seeds)
    });


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
