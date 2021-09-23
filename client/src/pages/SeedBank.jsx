import '../style/App.css';
import React, { useState, useEffect } from "react";
import { Seeds, Garden, Worlds } from '../components';
import { calculateAchievement, saveGarden, createPlant } from '../functions'
import { getBalloons, Balloon } from '../gameObjects'

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


  console.log("SEEDS IN SEEDBANK IS")
  console.log(seeds)


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
    console.log("UPDATING SEEDS")
    console.log(seeds)
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
    console.log(balloons)
  }

  const checkAchievements = () => {
    console.log("Checking achievements")
    const fivePlants = plants.length % 5
    console.log("FivePlants")
    console.log(fivePlants)
    console.log("Achievement Count")
    const achievementCount = seeds.length / 5 // how many multuples of five?
    const startingSeeds = 2 // offset for the starting seeds
    console.log(achievementCount)
    console.log(achievementCount + startingSeeds)
    console.log(seeds.length)
    if (fivePlants === 0 && plants.length > 0 && seeds.length < (achievementCount + startingSeeds)) {
      console.log("Achievement!")
      const newSeeds = calculateAchievement(seeds)
      console.log("New seeds is")
      console.log(newSeeds)
      setSeeds(newSeeds)

    }
    console.log("SEEDS is")
    console.log(seeds)
  }


  useEffect(() => {
    //
    console.log("Calling saveGarden")
    saveGarden(props.id, plants, props.world, props.worldChosen, seeds)
    checkAchievements()
  });


  return (
  <div className="App">
    <Garden
    plants={plants}
    balloons={balloons}
    world={props.world}
    seeds={seeds}
    selectSeed={selectSeed}
    removeBalloon={removeBalloon}
    updateSeeds={updateSeeds}
    sowPlant={sowPlant} />
    {props.worldChosen ? <Seeds seeds={seeds} className="App-header" selectSeed={selectSeed} /> : <Worlds className="App-header" newWorld={props.newWorld} saveWorld={ props.saveWorld } />}
  </div>
  );
}

export default SeedBank;
