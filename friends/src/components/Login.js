import React from "react";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Login" />
          <input type="text" placeholder="password" />
        </form>
      </div>
    );
  }
}

export default Login;
