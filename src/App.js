import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { styled } from "styled-components";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const Lists = [
    {
      title: "식비",
      price: 10000,
    },
    {
      title: "식비",
      price: 10000,
    },
  ];

  const submitInput = () => {
    console.log("Input");
  };

  return (
    <div className="App">
      <h1 className="main-title">예산 계산기</h1>

      <div className="container">
        <RowFlexDiv>
          <Input title="지출항목" type="string" setTitle={setTitle} />
          <Input title="비용" type="number" />
        </RowFlexDiv>
        <Button title="제출" onClick={submitInput} />
        {Lists.map((item) => {
          return <List title={item.title} price={item.price} />;
        })}
        <Button title="목록 지우기" />
      </div>
      <h2>총지출 : </h2>
    </div>
  );
}

export default App;

const RowFlexDiv = styled.div`
  display: flex;
  justify-contents: space-between;
`;
