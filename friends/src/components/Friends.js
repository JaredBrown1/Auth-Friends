import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Card from "./Card";
import Form from "./Form";

const FriendsList = () => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then((res) => {
        console.log(res);
        setFriend(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Add a new friend here</h1>
      <Form />
      {friend.map((friends) => (
        <div>
          <Card key={friends.id} friend={friends} />
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
