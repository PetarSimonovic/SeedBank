import { setDate, createId } from './'
import { Plant } from '../components'


export default function createPlant(event) {

  const position = [event.point.x, event.point.y, event.point.z]
  const key = createId()
  const newPlant = <Plant key={key} growth={0} bloom={2} date={setDate()} position={position} />
  console.log("New Plant")
  console.log(newPlant)

  return newPlant
}
