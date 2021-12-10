import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  //?? 디폴트값
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
};

export default Circle;

// interface PlayerShape {
//   name: string;
//   age: number;
// }

// const sayHello = (playerObj: PlayerShape) =>
//   `Hello ${playerObj.name} ${playerObj.age}`;
