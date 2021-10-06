import api from '../api';
import { setDate } from './'

// saves the world to the user account

export default async function saveGarden(id, newWorld, chosen) {
  const world = {"world" : JSON.stringify(newWorld)}
  const worldChosen = {"worldChosen" : chosen}
  const date = setDate()
  const lastLogin  = { "lastLogin" : date.stamp }
  const payload = {world, worldChosen, lastLogin}
  console.log(payload)
  await api.updateGarden(id, payload).then(res => {
        console.log(res)
        console.log('Garden updated successfully')
    })
}
