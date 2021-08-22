import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const addUser = payload => api.post(`/user`, payload)
export const getUser = name => api.get(`/user/${name}`)
export const updateGardenById = (id, garden) => api.put(`/movie/${id}`, garden)


const apis = {
    addUser,
    getUser,
}

export default apis
