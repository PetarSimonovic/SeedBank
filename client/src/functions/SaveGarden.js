import api from '../api';
import { WorldData } from '../gameObjects'

// strips out react components from the state garden array and saves plant props as an object that's easy to parse
// Needs error handling!


export default async function saveGarden(id, plants, newWorld, chosen, savedSeeds){
  let savedGarden = extractPlants(plants)
  const garden = {"garden" : savedGarden}
  const world = {"world" : JSON.stringify(newWorld)}
  const seeds = {"seeds": JSON.stringify(savedSeeds)}
  const worldChosen = {"worldChosen" : chosen}
  const payload = {garden, world, worldChosen, seeds}
  console.log("PAYLOAD")
  console.log(payload)
  console.log(worldChosen)
  console.log("Attempting to save garden")
  await api.updateGarden(id, payload).then(res => {
        console.log('Garden updated successfully')
    })
  console.log("SAVED GARDEN")
  console.log(savedGarden)
}

function extractPlants(plants) {
  let extractedPlants = []
  for (let plant = 0; plant < plants.length; plant ++) {
    const key = plants[plant].key
    const parsedPlant = plants[plant].props
    const savedPlant = {key: key, growth: parsedPlant.growth, date: parsedPlant.date, position: parsedPlant.position, type: parsedPlant.type}
    extractedPlants.push(savedPlant)
  }
  return extractedPlants
}
