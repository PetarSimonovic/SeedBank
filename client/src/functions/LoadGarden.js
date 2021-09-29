import { Plant } from '../components'
import { setDate, calculateDays } from '../functions'

// Reads a saved Garden and creates an array of plants ready to render

export default function loadGarden(garden) {
  let parsedGarden = []
  const today = setDate(Date()).stamp
  for (let plant = 0; plant < garden.length; plant ++ ) {
    const parsedPlant = garden[plant]
    const growth = calculateGrowth(parsedPlant.date, today)
    parsedGarden.push(<Plant key={parsedPlant.key} growth={growth} date={parsedPlant.date} position={parsedPlant.position} type={parsedPlant.type}/>)
  }
  return parsedGarden
}

function calculateGrowth(plantDate, today) {
  const days = calculateDays(plantDate.stamp, today)
  return days
}




//module.exports = parseGarden;
