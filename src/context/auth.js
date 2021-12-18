import React, {createContext, useState, useContext, useEffect} from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../services/firebase'

const AuthContext = createContext();

export function AuthProvider({children}){
  const [data, setData]  = useState('')

  const handleSignUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)

  }

  const handleSignIn = (email, password ) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() =>{
    const unsubcribe =  onAuthStateChanged(auth, (currentUser) =>{
      setData(currentUser)
    })
    return () =>{
      unsubcribe()
    }
  },[])
  return(
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}