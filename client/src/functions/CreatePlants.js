import { Plant } from '../components'

// creates an array of plant components to initialise the plant state array in SeedBank.jsx

export default function createPlants(plants) {
  let plantCollection = []
  for (let index = 0; index < plants.length; index++) {
    console.log("CREATIN PLANT")
    console.log(plants)
    let plant = plants[index]
    plantCollection.push(<Plant key={plant.plantId} plantId={plant.plantId} growth={plant.growth} date={plant.date} position={plant.position} type={plant.type} />)
  }
  return plantCollection
}
