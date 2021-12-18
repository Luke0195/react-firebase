import React from "react";
import { useAuth } from '../../context/auth'
import './styles.css'



export function Home() {
  const {data:user, handleSignOut} = useAuth();
  const handleLogOut = async() =>{
    try{ 
      await handleSignOut();
    }catch(error){
      console.log(error.message)
    }
  }
  return(
    <div className="home-container">
      <div className="home-content">
        <h2>  Welcome {user.email} </h2>
      
      <button onClick={handleLogOut}>Logout</button>
      </div>
    </div>  
    
    )
}
