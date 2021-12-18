import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { SignIn } from "../pages";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<SignIn />} />
    </Switch>
  );
}
