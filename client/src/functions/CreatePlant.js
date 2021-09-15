import { setDate, createId } from './'
import { Plant } from '../components'
import { GenericPlant } from '../gameObjects'

// Creates a new Plant, with a uniqueID, growth initialised at 0 and a new date

export default function createPlant(event, seed) {

  const position = [event.point.x, event.point.y, event.point.z]
  const key = createId()
  const date = setDate()
  const plantData = new GenericPlant(key, date, position)
  console.log("plantData is:")
  console.log(plantData)
  const newPlant = <Plant key={key} type={seed} date={setDate()} position={position} plantData={plantData} />
  console.log("New Plant")
  console.log(newPlant)

  return newPlant
}
