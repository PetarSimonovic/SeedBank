import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const addUser = payload => api.post(`/user`, payload)
export const getUser = id => api.get(`/user/${id}`)

const apis = {
    addUser,
    getUser,
}

export default apis
