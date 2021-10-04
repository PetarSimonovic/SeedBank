import api from '../api';
import { sendBalloon } from './'


export default async function makeFriendRequest(id, userName, friendName) {
  let validRequest = true


  await api.getFriendByName(friendName, id).then(res => {
    console.log('Already friends?')
    console.log(res)
    if (res.data.data.friendName === friendName && res.data.data.userId === id) {
      console.log("YES ALREADY FRIENDS")
      return
    } else {
      sendFriendBalloon(id, userName, friendName)
    }
  })
}

async function sendFriendBalloon(id, userName, friendName) {
  console.log("Making friend request to " + friendName + "from" + " userName")
  await api.getUser(friendName).then(res => {
    const friendId = res.data.data._id
    const type = "friendRequest"
    const quantity = 1
    const message = `${userName} wants to connect!`
    sendBalloon(friendId, type, quantity, message, userName)
  })
}
