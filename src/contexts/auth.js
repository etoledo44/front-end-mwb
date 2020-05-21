import React, {createContext, useContext, useState, useEffect} from 'react'
import api from '../services/api'
import { useHistory } from 'react-router-dom'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const history = useHistory()

    useEffect(()=>{
        async function loadStorageData(){
            const storageUser = localStorage.getItem('@mwb:user')
            const storageToken = localStorage.getItem('@mwb:token')

            if(storageUser && storageToken){
                setUser(JSON.parse(storageUser))
                setToken(storageToken)
            }
        }
        loadStorageData()
    }, [])


    async function logIn(user){
        try {
            const response = await api.post('/login', user)
            const {id_user, firstName, email, token} = response.data
            const userData = {id_user, firstName, email}
            setUser(userData)
            setToken(token)
            localStorage.setItem('@mwb:user', JSON.stringify(userData))
            localStorage.setItem('@mwb:token', token )
            return response

        } catch (error) {
            return error
        }
    }

    function logOut(){
        localStorage.removeItem('@mwb:user')
        localStorage.removeItem('@mwb:token')
        setUser(null)
        setToken(null)
        history.push('login')
    }


    return(
        <AuthContext.Provider value = {{logIn, user, token, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    return context
}