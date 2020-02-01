import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App">

    // </div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route exact path="/">{/* <Home /> */}</Route>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
