import React from "react";
import styled from "styled-components";

const Container = styled.p<{ align?: string }>`
  color: #ff3333;
  margin: 0;
  font-size: 0.9em;
  text-align: ${({ align }) => (align ? align : "left")};

  &:first-letter {
    text-transform: uppercase;
  }
`;

interface IProps {
  msg?: string;
  align?: string;
}

const InputErrorMessage: React.FC<IProps> = (props) => {
  const { msg, align } = props;

  return msg ? <Container align={align}>{msg}</Container> : null;
};

export default InputErrorMessage;
