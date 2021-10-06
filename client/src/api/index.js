import axios from 'axios'

const api = axios.create({
    baseURL: "/api",
})
//USER
export const addUser = payload => api.post(`/user`, payload)
export const getUser = name => api.get(`/user/${name}`)
export const updateGarden = (id, payload) => api.put(`/user/${id}`, payload)

//BALLOONS
export const addBalloons = payload => api.post(`/balloons`, payload)
export const getBalloons = userId => api.get(`/balloons/${userId}`)
export const updateBalloons = (balloonId, payload) => api.put(`/balloons/${balloonId}`, payload) // only being used to claim balloons at the moment

//FRIENDS
export const addFriends = payload => api.post(`/friends`, payload)
export const getFriends = userId => api.get(`/friends/${userId}`)
export const getFriendByName = (friendName, id) => api.get(`/friend/${friendName}/${id}`)

//SEEDS
export const addSeeds = payload => api.post(`/seeds`, payload)
export const getSeeds = userId => api.get(`/seeds/${userId}`)
export const updateSeeds = (type, payload) => api.put(`/seeds/${type}`, payload) // only updates variants and quantity




const apis = {
    addUser,
    getUser,
    updateGarden,
    addBalloons,
    getBalloons,
    updateBalloons,
    getFriends,
    addFriends,
    getFriendByName,
    addSeeds,
    getSeeds,
    updateSeeds
}

export default apis
