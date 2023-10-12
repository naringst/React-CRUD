import React from "react";
import "./input.css";
import { styled } from "styled-components";

export default function Input({ title, type, setTitle }) {
  return (
    <Div>
      <h1>{title}</h1>
      <input type={type} />
    </Div>
  );
}

const Div = styled.div`
  margin: 5px 10px;
`;
