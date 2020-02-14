import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

//components

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <nav>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/protected">Friends</Link>
        </nav>
        <Switch>
          <Route exact path="/protected" />
          <Route path="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
