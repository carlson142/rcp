import React from "react";
import styled from "styled-components";

interface BProps {
  bstyle: string;
}
const Button = styled.button<BProps>`
  min-width: max-content;

  padding: 1rem 4rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :not(:last-child) {
    margin-right: 2rem;
  }

  ${(props) =>
    props.bstyle === "empty" &&
    `
    border: 1px solid white;
    background-color: transparent;
    color: white;

    :hover {
        background-color: white;
        color: var(--score-text);
    }
  `}

  ${(props) =>
    props.bstyle === "full" &&
    `
    background-color: white;
    color: var(--dark-text);
    border: none;

    :hover {
        color: hsl(349, 70%, 56%);
    }
  `}
`;

interface CustomButtonProps {
  style: "empty" | "full";
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  style,
  text,
  onClick,
}) => {
  return (
    <Button bstyle={style} onClick={onClick}>
      {text}
    </Button>
  );
};
export default CustomButton;
