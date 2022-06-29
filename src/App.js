import React from "react";
import Container from "./Container";
import Counter from "./Counter";
// import "./App.css";
import MyHeader from "./MyHeader";

function App() {
  let name = "김종효";

  const func = () => {
    return "func";
  };

  const number = 5;

  const countProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    // initialValue: 5,
  };

  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...countProps} />
      </div>
    </Container>
  );
}

export default App;
