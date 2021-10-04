import api from '../api';


export default async function loadFriends(id) {
  console.log("LOADING FRIENDS FOR " + id)
  const loadedFriends = await api.getFriends(id)
  console.log(loadedFriends)
  return loadedFriends
}
