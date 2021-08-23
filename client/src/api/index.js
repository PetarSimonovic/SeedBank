import axios from 'axios'

const api = axios.create({
    baseURL: "/api",
})

export const addUser = payload => api.post(`/user`, payload)
export const getUser = name => api.get(`/user/${name}`)
export const updateGarden = (id, garden) => api.put(`/user/${id}`, garden)


const apis = {
    addUser,
    getUser,
    updateGarden
}

export default apis
