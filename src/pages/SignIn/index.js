import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import { Container, Input,Form, Button } from "semantic-ui-react";
import  GoogleButton from 'react-google-button'
import './styles.css'
import {useAuth} from '../../context/auth'

export function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    hasError:false,
    message: ''
  });

  const {handleSignIn} = useAuth();
  
  const handleSubmit = async(e) =>{
    try{
      e.preventDefault()
      await handleSignIn(email, password)
      alert('Usuário Autenticado com sucesso');
      setEmail('');
      setPassword('');
      navigate('/home')
    }catch(error){
      setError((prevState) => ({...prevState, hasError: true, message: error.message}))
      alert(error)
    }
  }

  return (
    <Container content>
     <div className="content">
       <h1> FireBase Auth</h1>
       <Form onSubmit={handleSubmit}>
        {error.hasError && <span className="error"> {error.message}</span>}
        <Input 
         type="text"
         onChange={(e) => setEmail(e.target.value)} 
         placeholder="Email"/>
        <Input 
          type="password"
          placeholder="Senha"
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
          <span> Dont' have an account?<Link to="/signup"> SignUp</Link></span>
       </div>
       
     </div>
    </Container>
  )
}
