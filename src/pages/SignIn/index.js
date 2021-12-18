import React from "react";
import { Container, Input,Form, Button } from "semantic-ui-react";
import  GoogleButton from 'react-google-button'
import './styles.css'

export function SignIn() {
  return (
    <Container content>
     <div className="content">
       <h1> FireBase Auth</h1>
       <Form>
        <Input type="text" placeholder="Email"/>
        <Input type="password" placeholder="Senha"/>
        <Button content={'Log In'}/>
       </Form>
       <div className="google-button">
         <GoogleButton style={ {
           width: '100%'
         }}/>
       </div>
       
     </div>
    </Container>
  )
}
