import React from "react";
import { styled } from "styled-components";

export default function List({ title, price }) {
  return (
    <Div>
      <span>{title}</span>
      <span>{price}</span>

      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid #b3b0d5;
`;
