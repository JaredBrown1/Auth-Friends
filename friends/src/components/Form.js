import React, { useState } from "react";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = styled.div``;

const FormCont = styled.form`
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Inputs = styled.input`
  margin: 0 auto;
  width: 200px;
  height: 60px;
`;

const FormButton = styled.button`
  margin: 0 auto;
  width: 200px;
  height: 60px;
  text-align: center;
`;

const Form = () => {
  const [friend, setFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const newFriendSubmit = () => {
    axiosWithAuth()
      .post("friends", friend)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <FriendForm>
      <FormCont onSubmit={newFriendSubmit}>
        <Inputs
          placeholder="Name"
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
        />
        <Inputs
          placeholder="Age"
          type="text"
          name="age"
          value={friend.age}
          onChange={handleChange}
        />
        <Inputs
          placeholder="Email"
          type="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
        />
        <FormButton>Add</FormButton>
      </FormCont>
    </FriendForm>
  );
};

export default Form;
