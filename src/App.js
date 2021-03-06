import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NoMatch from "./components/noMatch/NoMatch";
import specificUser from "./components/specificUser/specificUser";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeView from "./components/HomeView/HomeView";
import AddNote from "./components/HomeView/notes/add/AddNote";
import UpdateNote from "./components/HomeView/notes/update/UpdateNote";

function App(props) {
  return (
    <Router>
      <Container className="App h-100" fluid={true}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route path="/users/:id" component={specificUser}></Route>
          <Route path="/notes/add"><AddNote/></Route>
          <Route path="/notes/:id"><UpdateNote/></Route>
          <Route path="/home"><HomeView/></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
