import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

//components
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/Friends";

const AppContainer = styled.div`
  text-align: center;
  max-height: 1000vh;
`;

const NavBar = styled.nav`
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  justify-content: space-around;
  background-color: #b4d3db;
`;

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <h1>Friends</h1>
        <NavBar>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/protected">Friends</Link>
        </NavBar>
        <Switch>
          <ProtectedRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
