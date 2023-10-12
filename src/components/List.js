import React from "react";
import { styled } from "styled-components";

export default function List({
  id,
  category,
  price,
  setCategory,
  setPrice,
  Lists,
  setLists,
  setEditingId,
  setIsEdit,
}) {
  const deleteOneItem = (e) => {
    setLists(Lists.filter((item) => item.id !== id));
  };

  const editOneItem = () => {
    setCategory(category);
    setPrice(price);
    setIsEdit(true);
    setEditingId(id);
  };
  return (
    <Div>
      <span>{category}</span>
      <span>{price}</span>

      <div>
        <button onClick={editOneItem}>수정</button>
        <button onClick={deleteOneItem}>삭제</button>
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
  color: black;
`;
