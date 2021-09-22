import { setDate, createId } from './'
import { Plant } from '../components'
import { GenericPlant } from '../gameObjects'

// Creates a new Plant, with a uniqueID, growth initialised at 0 and a new date

export default function createPlant(event, seed) {

  const position = [event.point.x, event.point.y, event.point.z]
  const key = createId()
  const date = setDate()
  const plantData = new GenericPlant()
  const newPlant = <Plant key={key} growth={0} date={date} position={position} type={seed} />

  return newPlant
}
