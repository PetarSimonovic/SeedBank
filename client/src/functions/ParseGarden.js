import { Plant } from '../components'


export default function parseGarden(garden) {
  let parsedGarden = []
  for (let plant = 0; plant < garden.length; plant ++ ) {
    console.log()
    let parsedPlant = garden[plant]
    console.log(parsedPlant)
    parsedGarden.push(<Plant key={parsedPlant.key} date={parsedPlant.date} position={parsedPlant.position} />)
  }
  console.log(parsedGarden)
  return parsedGarden
}

//module.exports = parseGarden;
