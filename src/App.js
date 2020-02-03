import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllUser from "./components/allUser/AllUser";
import NoMatch from "./components/noMatch/NoMatch";
import specificUser from "./components/specificUser/specificUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">{/* <Home /> */}</Route>
          <Route exact path="/users"><AllUser/></Route>
          <Route path="/users/:id" component={specificUser}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
