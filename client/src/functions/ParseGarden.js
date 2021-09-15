import { Plant } from '../components'
import { setDate, calculateDays } from '../functions'
import { GenericPlant } from '../gameObjects'

// Reads a saved Garden and creates an array of plants ready to render

export default function parseGarden(garden) {
  let parsedGarden = []
  const today = setDate(Date()).stamp
  for (let plant = 0; plant < garden.length; plant ++ ) {
    const parsedPlant = garden[plant]
    const growth = calculateGrowth(parsedPlant.date, today)
    const plantData = new GenericPlant()
    parsedGarden.push(<Plant key={parsedPlant.key} growth={parsedPlant.growth} date={parsedPlant.date} position={parsedPlant.position} plantData={plantData}/>)
  }
  console.log(parsedGarden)
  return parsedGarden
}

function calculateGrowth(plantDate, today) {
  console.log("Plant date is")
  console.log(plantDate.stamp)
  console.log("Today is")
  console.log(today)
  const days = calculateDays(plantDate.stamp, today)
  console.log(`${days} days have passed`)
  return days
}




//module.exports = parseGarden;
