import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { SignIn, Home,SignUp} from "../pages";
import {PrivateRoute} from './privateRoute'

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<SignIn />} />
      <Route path="home" element={
        <PrivateRoute>
          <Home/>
        </PrivateRoute>
        
        } />
      <Route path="signup" element={<SignUp/>}/>
    </Switch>
  );
}
