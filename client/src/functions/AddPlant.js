import api from '../api';
import { Plant } from '../gameObjects'

// Creates a new Plant, with a uniqueID, growth initialised at 0 and a new date

export default async function addPlant(plant) {
  console.log("SAVING PLANT ")
  console.log(plant)
  plant.date = JSON.stringify(plant.date)

  await api.addPlant(plant).then(res => {
      console.log("PLANT SAVED")
  })
}
