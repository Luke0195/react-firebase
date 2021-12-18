import React, {useState} from "react";
import {Link} from 'react-router-dom'
import { Container, Input,Form, Button } from "semantic-ui-react";
import {useAuth} from '../../context/auth'
import  GoogleButton from 'react-google-button'
import './styles.css'

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    hasError:false,
    message: ''
  });

  const {handleSignUp} = useAuth();
  
  const handleSubmit = async(e) =>{
    try{
      e.preventDefault()
      await handleSignUp(email, password)
    }catch(error){
      setError((prevState) => ({...prevState, hasError: true, message: error.message}))
      alert(error)
    }
  }
   return (
    <Container content>
     <div className="content">
       <h1> FireBase Auth SignUp</h1>
       <Form onSubmit={handleSubmit}>
         {error.hasError && <span className="error"> {error.message}</span>}
        <Input
          type="text" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <Input 
         type="password"
         placeholder="Senha"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         
         />
        <Button content={'Log In'}/>
       <div className="google-button">
         <GoogleButton style={ {
           width: '100%'
          }}/>
       </div>
        </Form>

       <div className="create-account">
          <span>Already have an account?<Link to="/"> SignIn</Link></span>
       </div>
       
     </div>
    </Container>
  )
}
