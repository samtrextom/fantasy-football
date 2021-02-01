import React, {useContext, createContext, useState, useEffect} from 'react'
import {auth} from '../firebase'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password){
        console.log(email + ' ' + password)
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    },[])

    const value = {
        currentUser,
        login,
        logout
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
