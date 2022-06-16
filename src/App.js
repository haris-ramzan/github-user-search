import React from "react";
import { SearchPage } from "./pages/SearchPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { UserPage } from "./pages/UserPage";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <SearchPage {...props} />} />
        <Route path="/user" render={(props) => <UserPage {...props} />} />
        <Redirect path="/redirect" to={"/"} />
      </Switch>
    </Router>
  )
};