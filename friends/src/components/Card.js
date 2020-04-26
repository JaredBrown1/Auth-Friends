import React from "react";
import styled from "styled-components";

const CardCont = styled.div`
  margin: 0 auto;
  background-color: #b4d3db;
  max-width: 400px;
`;

const Card = (props) => {
  return (
    <div>
      <CardCont>
        <h2>Name: {props.friend.name}</h2>
        <h3>Age: {props.friend.age}</h3>
        <h3>Email: {props.friend.email}</h3>
      </CardCont>
    </div>
  );
};

export default Card;
