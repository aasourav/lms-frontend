import React, { PropsWithChildren } from "react";
import { down, up } from "styled-breakpoints";
import styled from "styled-components";

type TAnimatedButtonSize = "small" | "medium" | "large";

const Button = styled.button<{
  size?: TAnimatedButtonSize;
  outlined?: boolean;
}>`
  position: relative;
  border: none;
  outline: none;
  background-color: ${({ theme, outlined }) =>
    outlined ? theme.colors.grays.gray1 : theme.colors.primary.main};
  box-shadow: 7px 20px 20px -1px #0000001a;
  border-radius: 0.375rem;
  cursor: pointer;
  padding: ${({ size }) =>
    size === "large" ? "0.9375rem 1.875rem" : "0.625rem 1.25rem"};
  border: ${({ theme, outlined }) =>
    outlined ? `.0625rem solid ${theme.colors.primary.main}` : undefined};

  ${up("sm")} {
    padding: ${({ size }) =>
      size === "small" ? "0.625rem 1.25rem" : "0.9375rem 1.875rem"};
    border: ${({ theme, outlined }) =>
      outlined ? `.125rem solid ${theme.colors.primary.main}` : undefined};
  }

  .box {
    position: absolute;
    top: ${({ outlined }) => (outlined ? ".60rem" : ".5rem")};
    left: ${({ outlined, size }) =>
      size === "large" && outlined
        ? ".4375rem"
        : size === "large"
        ? ".38rem"
        : outlined
        ? ".28rem"
        : ".25rem"};

    right: 0;
    bottom: 0;
    height: ${({ size }) => (size === "large" ? "3.4375rem" : "2.625rem")};
    border: ${({ theme, size }) =>
      `${size === "large" ? ".125rem" : ".0625rem"} solid ${
        theme.colors.primary.main
      }`};

    ${up("sm")} {
      height: ${({ size }) => (size === "small" ? "2.625rem" : "3.4375rem")};
      border: ${({ theme, size }) =>
        `${size === "small" ? ".0625rem" : ".125rem"} solid ${
          theme.colors.primary.main
        }`};
      left: ${({ outlined, size }) =>
        size === "small" && outlined
          ? ".28rem"
          : size === "small"
          ? ".25rem"
          : outlined
          ? ".5rem"
          : ".38rem"};
    }

    width: 100%;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.25s ease;

    ${down("sm")} {
      height: 2.875rem;
      top: 0.25rem;
    }
  }

  &:hover .box {
    top: 0;
    left: 0;
  }

  &:active .box {
    display: ${({ outlined }) => (outlined ? "none" : "unset")};
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1.125rem;
    font-weight: 500;
    ${down("sm")} {
      font-size: 1rem;
    }
    color: ${({ theme, outlined }) =>
      outlined ? theme.colors.primary.main : theme.colors.grays.gray1};
    line-height: 1.625rem;
  }

  ${down("sm")} {
    padding: 0.625rem 1.25rem;
  }

  &:active {
    transition: all 0.1s ease;
    transform: scale(0.98);
  }
`;

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  size?: TAnimatedButtonSize;
  outlined?: boolean;
};

const AnimatedButton: React.FC<PropsWithChildren<TButtonProps>> = (props) => {
  const { text, ...rest } = props;
  return (
    <Button {...rest}>
      <p>{text}</p>
      <div className="box" />
    </Button>
  );
};

export default AnimatedButton;
