import axios from 'axios'
import { User, Repos } from '../types'

const api = axios.create({
    baseURL: "https://api.github.com/"
})

export const useApi = () => ({
    getUser: async (userName: string) => {
        const { data } = await api.get<User>(`/users/${userName}`)
        .catch((err) => {
            return { status: err.status, data: null}
        })
        return data
    },
    getRepos: async(userName: string) => {
        const { data } = await api.get<Repos[]>(`/users/${userName}/repos`)
        .catch((err) => {
            return { status: err.status, data: null}
        })
        return data
    }
})