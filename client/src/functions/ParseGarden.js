import { Plant } from '../components'
import { setDate } from '../functions'


export default function parseGarden(garden) {
  let parsedGarden = []
  for (let plant = 0; plant < garden.length; plant ++ ) {
    let parsedPlant = garden[plant]
    parsedGarden.push(<Plant key={parsedPlant.key} growth={parsedPlant.growth} date={parsedPlant.date} position={parsedPlant.position} />)
  }
  console.log(parsedGarden)
  return parsedGarden
}

//module.exports = parseGarden;
