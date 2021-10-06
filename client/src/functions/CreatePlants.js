import {createPlantComponent } from './'

// creates an array of plant components to initialise the plant state array in SeedBank.jsx

export default function createPlants(plants) {
  let plantCollection = []
  for (let index = 0; index < plants.length; index++) {
    let plant = plants[index]
    plantCollection.push(createPlantComponent(plant))
  }
  return plantCollection
}
