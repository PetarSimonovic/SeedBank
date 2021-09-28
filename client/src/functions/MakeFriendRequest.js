import api from '../api';


export default async function makeFriendRequest(username) {
  await api.getUser(username).then(res => {
    console.log(res.data.data.name)
    console.log(res.data.data._id)

  })
}
