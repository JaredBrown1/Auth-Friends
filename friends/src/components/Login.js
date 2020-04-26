import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const LoginForm = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: #7d9aa1;
`;

const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormButton = styled.button`
  width: 200px;
  height: 50px;
  text-align: center;
`;

const Inputs = styled.input`
  width: 200px;
  height: 60px;
  text-align: center;
`;

class Login extends React.Component {
  state = {
    isLoading: false,
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch((err) => {
        console.log("invalid login", err);
      });
  };

  render() {
    return (
      <LoginForm>
        <FormCont onSubmit={this.login}>
          <Inputs
            type="text"
            name="username"
            placeholder="Login"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <Inputs
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <br />
          <FormButton>Login</FormButton>
        </FormCont>
      </LoginForm>
    );
  }
}

export default Login;
