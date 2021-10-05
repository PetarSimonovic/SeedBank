import api from '../api';
import { Friend } from './'

export default async function makeFriends(myId, myName, friendName, myWorld) {



  await api.getUser(friendName).then(res => {
    const friendId = res.data.data._id
    const friendWorld = res.data.data.world
    const friendName = res.data.data.name
    const me = new Friend(friendId, myId, myName, JSON.stringify(myWorld)) // my details to be saved in friend's db
    const friend = new Friend(myId, friendId, friendName, friendWorld) // friend's details to be saved in my db
    api.addFriends(me).then(res => {console.log(`ME ${me.friendName} is friends with ${friend.friendName}`) })
    api.addFriends(friend).then(res => {console.log(`"FRIEND "${friend.friendName} is friends with ${me.friendName}`) })

  })
}
