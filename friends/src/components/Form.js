import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Form = () => {
  const [friend, setFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const newFriendSubmit = () => {
    axiosWithAuth()
      .post("friends", friend)
      .then(res => {
        console.log(res);
      });
  };

  return (
    <div>
      <form onSubmit={newFriendSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
        />
        <input
          placeholder="Age"
          type="text"
          name="age"
          value={friend.age}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
