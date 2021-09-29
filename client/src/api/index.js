import axios from 'axios'

const api = axios.create({
    baseURL: "/api",
})

export const addUser = payload => api.post(`/user`, payload)
export const getUser = name => api.get(`/user/${name}`)
export const updateGarden = (id, payload) => api.put(`/user/${id}`, payload)
export const addBalloons = payload => api.post(`/balloons`, payload)
export const getBalloons = userId => api.get(`/balloons/${userId}`)
export const updateBalloons = (id, payload) => api.put(`/balloons/${id}`, payload)


const apis = {
    addUser,
    getUser,
    updateGarden,
    addBalloons,
    getBalloons,
    updateBalloons
}

export default apis
