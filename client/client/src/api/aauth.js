import axios from './axios.js'


const API = 'http://localhost:4000/api'

export const registerrecuest = user => axios.post(`/register`,user)


export const loginrecuest = user => axios.post(`/login`,user)


export const verityTokenRequest =  () => axios.get('/verify')

export const logoutRequest = () => axios.get("/logout")