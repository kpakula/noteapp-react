import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllUser from "./components/allUser/AllUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">{/* <Home /> */}</Route>
          <Route exact path="/about">{/* <About /> */}</Route>
          <Route exact path="/users"><AllUser/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
