import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
const App = () => {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };
  return (
    <Container>
      <H1>Title</H1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={onChange}
          value={value}
        />
        <button>log in</button>
      </form>
    </Container>
  );
};

export default App;
