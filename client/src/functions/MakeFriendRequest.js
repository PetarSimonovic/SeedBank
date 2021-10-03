import api from '../api';
import { sendBalloon } from './'


export default async function makeFriendRequest(id, userName, friendName) {
  console.log("Making friend request to " + friendName + "from" + " userName")
  await api.getUser(friendName).then(res => {
    const friendId = res.data.data._id
    const type = "friendRequest"
    const quantity = 1
    const message = `${userName} wants to connect!`
    sendBalloon(friendId, type, quantity, message, userName)
  })
}
