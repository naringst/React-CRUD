import React from "react";

export default function Button({
  title,
  price,
  category,
  id,
  Lists,
  setLists,
  setCategory,
  setPrice,
  setIsEdit,
  setIsEditted,
  setIsSubmitted,
}) {
  const storeLists = () => {
    setLists([...Lists, { id: id, price: price, category: category }]);
    setCategory("");
    setPrice(0);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const deleteLists = () => {
    setLists([]);
  };

  const editingLists = () => {
    //해당 id의 내용 수정 ???
    const editObject = Lists.find((item) => item.id === id);

    editObject.price = price;
    editObject.category = category;

    setLists(Lists.map((item) => (item.id === id ? editObject : item)));
    setIsEdit(false);
    setCategory("");
    setPrice(0);
    setIsEditted(true);
    setTimeout(() => {
      setIsEditted(false);
    }, 2000);
  };

  if (title === "목록지우기") {
    return <button onClick={deleteLists}>{title}</button>;
  } else if (title === "수정") {
    return <button onClick={editingLists}>{title}</button>;
  } else {
    return <button onClick={storeLists}>{title}</button>;
  }
}
