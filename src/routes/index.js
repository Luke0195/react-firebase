import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { SignIn, Home,SignUp} from "../pages";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<SignIn />} />
      <Route path="home" element={<Home />} />
      <Route path="signup" element={<SignUp/>}/>
    </Switch>
  );
}
