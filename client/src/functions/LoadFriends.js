import api from '../api';
import { randomiser } from './'

const gardenX = {max: 40, min: -20}
const gardenY = {max: 20, min: -30}
const gardenZ = {max: -30, min: -50}


export default async function loadFriends(id) {
  console.log("LOADING FRIENDS FOR " + id)
  const loadedFriends = await api.getFriends(id)
  const friendsData = loadedFriends.data.data
  const friendCollection = []
  for (let index = 0; index < friendsData.length; index++) {
    const friend = friendsData[index]
    friendCollection.push(
      {
        friendId: friend.friendId,
        name: friend.friendName,
        world: JSON.parse(friend.friendWorld),
        position: [randomiser(gardenX), randomiser(gardenY), randomiser(gardenZ)]
      }
    )
  }
  return friendCollection
}
