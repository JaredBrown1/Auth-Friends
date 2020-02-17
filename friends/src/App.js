import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

//components
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/Friends";

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
          <ProtectedRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
