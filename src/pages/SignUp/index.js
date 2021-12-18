import React from "react";
import {Link} from 'react-router-dom'
import { Container, Input,Form, Button } from "semantic-ui-react";
import  GoogleButton from 'react-google-button'
import './styles.css'

export function SignUp() {
  return (
    <Container content>
     <div className="content">
       <h1> FireBase Auth SignUp</h1>
       <Form>
        <Input type="text" placeholder="Email"/>
        <Input type="password" placeholder="Senha"/>
        <Button content={'Log In'}/>
       <div className="google-button">
         <GoogleButton style={ {
           width: '100%'
          }}/>
       </div>
        </Form>

       <div className="create-account">
          <span>Already have an account?<Link to="/"> SignUp</Link></span>
       </div>
       
     </div>
    </Container>
  )
}
