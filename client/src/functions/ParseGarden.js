import { Plant } from '../components'
import { setDate, calculateDays } from '../functions'

// Reads a saved Garden and creates an array of plants ready to render

export default function parseGarden(garden) {
  let parsedGarden = []
  const today = setDate(Date()).stamp
  for (let plant = 0; plant < garden.length; plant ++ ) {
    const parsedPlant = garden[plant]
    const growth = calculateGrowth(parsedPlant, today)
    parsedGarden.push(<Plant key={parsedPlant.key} type={parsedPlant.type} date={parsedPlant.date} position={parsedPlant.position} plantData={parsedPlant.plantData}/>)
  }
  console.log(parsedGarden)
  return parsedGarden
}

function calculateGrowth(plant, today) {
  console.log("Plant date is")
  console.log(plant.date.stamp)
  console.log("Today is")
  console.log(today)
  const days = calculateDays(plant.date.stamp, today)
  console.log(`${days} days have passed`)
  return days
}




//module.exports = parseGarden;
