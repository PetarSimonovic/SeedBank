import axios from 'axios'

const api = axios.create({
    baseURL: "/api",
})

export const addUser = payload => api.post(`/user`, payload)
export const getUser = name => api.get(`/user/${name}`)
export const updateGarden = (id, payload) => api.put(`/user/${id}`, payload)


const apis = {
    addUser,
    getUser,
    updateGarden
}

export default apis
