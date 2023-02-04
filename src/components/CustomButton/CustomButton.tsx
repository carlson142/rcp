import React from "react";
import styled from "styled-components";

interface BProps {
  bstyle: string;
}
const Button = styled.button<BProps>`
  padding: 1rem 4rem;
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in;

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
