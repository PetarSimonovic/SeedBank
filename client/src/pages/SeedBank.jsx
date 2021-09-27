import '../style/App.css';
import React, { useState, useEffect, Suspense } from "react";
import { Seeds, Garden, Worlds } from '../components';
import { calculateAchievement, saveGarden, createPlant } from '../functions'
import { getBalloons, Balloon } from '../gameObjects'
import { Canvas } from "@react-three/fiber";
import {  Camera, Sun, World, Firmament, Noticeboard, Balloons, SeedBox } from '../components';



// Main page.
// Displays the Garden and the Seed panel, handles interactions between them and updates the user's garden/seedbank


// REFACTOR: avoid assiging state from index as state here (eg useState(props.seeds) - leads to confusion and makes it harder to troubleshoot
// This affects garden and seeds currently, which are loaded via login, passed to state in index, then passed here where they are updated and saved

function SeedBank(props) {


  const [plants, setPlants] = useState(props.garden) //  an array of plant components
  const [chosenSeed, setChosenseed] = useState("") // contains the type of seed if chosen, or null if no seed is currently selected
  const [seeds, setSeeds] = useState(props.seeds) //  an array of the player's available seeds
  const [seedIndex, setSeedindex] = useState(null) //  the index within seeds of the chosenSeed
  const [balloons, setBalloons] = useState(getBalloons(plants, seeds, props.lastLogin, props.today))
  const [seedList, setSeedlist] = useState(false)


  const sowPlant = ( event ) => {
    if (chosenSeed) {
      const newPlant = createPlant(event, chosenSeed)
      setChosenseed("")
      setPlants( (prev) => {
        return [newPlant, ...prev]
      })
      updateSeeds(-1)
    }
  }

  const selectSeed = (selectedSeed, index) => {
    const seed = seeds[index]
    if (seeds[index].quantity > 0) {
      setChosenseed(selectedSeed)
      setSeedindex(index)
    }
  }

  const updateSeeds = (increment, index = seedIndex) => {
    const updatedSeeds = [...seeds]
    updatedSeeds[index].quantity += increment
    setSeeds(updatedSeeds)
    setSeedindex(null)
  }

  const removeBalloon = (index) => {
    let removedBalloon = balloons[index]
    removedBalloon.claimed = true
    // setBalloons: creates a new array based on the previous one, removing the initial balloon, then adds a copy of the old balloon with 'claimed' set to true
    setBalloons(
      (prev) => {
        return [prev.filter(balloon => balloon.id !== removedBalloon.id), removedBalloon]
      }
    )
  }

  const checkAchievements = () => {
    const fivePlants = plants.length % 5
    const achievementCount = plants.length / 5 // how many multuples of five?
    const startingSeeds = 2 // offset for the starting seeds
    if (fivePlants === 0 && plants.length > 0 && seeds.length < (achievementCount + startingSeeds)) {
      console.log("Achievement!")
      const newSeeds = calculateAchievement(seeds)
      console.log("New seeds is")
      console.log(newSeeds)
      setSeeds(newSeeds)

    }
  }

  const toggleSeeds = () => {
    setSeedlist((prevState) => !prevState)
    console.log("TOGGLE " + seedList)
  }


  useEffect(() => {
    //
    console.log("Calling saveGarden")
    saveGarden(props.id, plants, props.world, props.worldChosen, seeds)
    setSeedlist(seedList)
    checkAchievements()
  });


  return (
  <div className="App">
    <Canvas id="canvas" camera={{ position: [0, 2, 3.5] }}>
      <Camera />
      <Suspense fallback={console.log("loading")}>
      <World
      sowPlant={sowPlant}
      position={[0, 0, 0]}
      world={props.world}
      seeds={seeds}
       />
       <SeedBox
        seeds={seeds}
        chosenSeed={chosenSeed}
        seedList={seedList}
        position={[-1, -1, 1.9]}
        selectSeed={selectSeed}
        chosenSeed={chosenSeed}
        toggleSeeds={toggleSeeds}
         />

      {plants}
      <Balloons
      removeBalloon={removeBalloon}
      updateSeeds={updateSeeds}
      balloons={balloons}
      seeds={seeds} />
      <Sun />
      <Firmament />
      <Noticeboard today={props.today}/>
     </Suspense>
    </Canvas>
    {props.worldChosen ? <Seeds chosenSeed={chosenSeed} /> : <Worlds className="App-header" newWorld={props.newWorld} saveWorld={ props.saveWorld } />}
  </div>
  );
}

export default SeedBank;
