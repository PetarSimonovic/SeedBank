import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const addUser = payload => api.post(`/user`, payload)
export const getUserById = id => api.get(`/user/${id}`)

const apis = {
    addUser,
    getUserById
}

export default apis
