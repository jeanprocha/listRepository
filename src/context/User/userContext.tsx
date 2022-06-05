import React, { createContext, useState } from 'react'
import { useApi } from '../../services/useApi';
import { User, Repos } from '../../types';

export type UserContextType = {
    user: User | null;
    listRepos: Repos[] | [];
    loading: Boolean;
    getUser: (userName: string) => Promise<boolean>;
    getListRepos: (userName: string) => Promise<boolean>;
    stopLoading: (state: boolean) => void;
    setNewUser: (newUser: User | null, newRepos: Repos[]) => void;
}

export const UserContext = createContext<UserContextType>(null!)

export const UserProvider = ({ children }: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null)
    const [listRepos, setListRepos] = useState<Repos[] | []>([])
    const [loading, setLoading] = useState<Boolean>(false)

    const api = useApi()

    const getUser = async (userName: string) => {
        setLoading(true)
        const data = await api.getUser(userName)
        if( data ){
            setUser(data)
            return true
        }
        setUser(null)
        return false
    }

    const getListRepos = async (userName: string) => {
        setLoading(true)
        const data = await api.getRepos(userName)
        if( data ){
            setListRepos(data)
            return true
        }
        return false
    }

    const stopLoading = (state: boolean) => {
        setLoading(state)
        
    }

    const setNewUser = (newUser: User | null, newRepos: Repos[]) => {
        setUser(newUser)
        setListRepos(newRepos)
    }
   
    return (
        <UserContext.Provider value={{ user, listRepos, loading, getUser, getListRepos, setNewUser, stopLoading }}>
            {children}
        </UserContext.Provider>
    )
}