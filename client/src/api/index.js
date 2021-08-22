import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const addUser = payload => api.post(`/user`, payload)
export const getUser = name => api.get(`/user/${name}`)

const apis = {
    addUser,
    getUser,
}

export default apis
