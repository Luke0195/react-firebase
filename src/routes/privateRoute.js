import React from 'react';
import {useAuth} from '../context/auth'
import {Navigate} from 'react-router-dom'


  export function PrivateRoute({children}){
  const { data:user} = useAuth()
 

  if(!user){ 
    return <Navigate to="/"/>
  }
  return children;
}