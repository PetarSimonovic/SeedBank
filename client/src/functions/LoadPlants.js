import { Plant } from '../gameObjects'
import { setDate, calculateDays } from '../functions'
import api from '../api';


// Reads a saved Garden and creates an array of plants ready to render

export default async function loadPlants(userId) {
  console.log("LOADING GARDEN for " + userId)
  const loadedPlants = await api.getPlants(userId)
  const plantsData = loadedPlants.data.data

  let parsedPlants = []

  const today = setDate(Date()).stamp
  for (let plant = 0; plant < plantsData.length; plant ++ ) {
    console.log("LOADED PLANT IS")
    const parsedPlant = plantsData[plant]
    parsedPlant.date = JSON.parse(parsedPlant.date)
    parsedPlant.growth = calculateGrowth(parsedPlant.date, today)
    console.log(parsedPlant)
    parsedPlants.push(Object.assign(new Plant(), parsedPlant))
  }
  return parsedPlants
}

function calculateGrowth(plantDate, today) {
  const days = calculateDays(plantDate.stamp, today)
  return days
}




//module.exports = parseGarden;
