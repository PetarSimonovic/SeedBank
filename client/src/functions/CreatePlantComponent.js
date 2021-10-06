import { Plant } from '../components'
import { createId } from './'

export default function createPlantComponent(plant) {
  return <Plant key={createId()} plantId={plant.plantId} growth={plant.growth} date={plant.date} position={plant.position} type={plant.type} />
}
