import React from "react";
import styled from "styled-components";

import triangle from "../../imgs/bg-triangle.svg";
import rock from "../../imgs/icon-rock.svg";
import paper from "../../imgs/icon-paper.svg";
import scissors from "../../imgs/icon-scissors.svg";
import { useSelectItem } from "../../zustand/SelectItemStore";

const Container = styled.div`
  height: 55vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    /* width: 10rem; */
  }
`;

const Box = styled.div``;

const TriangleContainer = styled.div`
  position: relative;
`;

const Triangle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 25rem;
    width: 25rem;
  }

  @media (max-width: 465px) {
    height: 20rem;
    width: 20rem;
  }
`;

interface CBProps {
  top: string;
  left: string;
  bgcolor: string;
}

const ChooseBox = styled.div<CBProps>`
  height: 20rem;
  width: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-image: linear-gradient(${(props) => props.bgcolor});

  box-shadow: 0px 7px 0px #acacac97, 0px 0px 0px #111;

  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  transform: translate(-50%, -50%);

  transition: all 0.2s ease-in;

  cursor: pointer;

  :hover {
    height: 21rem;
    width: 21rem;
  }

  @media (max-width: 600px) {
    height: 15rem;
    width: 15rem;
  }

  @media (max-width: 465px) {
    height: 13rem;
    width: 13rem;
  }
`;

const SelectedIcon = styled.img`
  height: 15rem;
  width: 15rem;
  object-fit: contain;

  padding: 3rem;
  background-color: #e4e3e3;
  border-radius: 50%;

  box-shadow: 0px 0px 0px #888, 0px -6px 0px #acacac;

  @media (max-width: 600px) {
    height: 10rem;
    width: 10rem;
  }

  @media (max-width: 465px) {
    height: 9rem;
    width: 9rem;
  }
`;

type StarterComponentProps = {};

const StarterComponent: React.FC<StarterComponentProps> = () => {
  const selectItem = useSelectItem((state) => state.selectItem);

  const handleSelectItem = (item: string) => {
    selectItem(item);
  };

  return (
    <Container>
      <Box>
        <TriangleContainer>
          <Triangle src={triangle} alt="triangle" />
          {/* Paper */}
          <ChooseBox
            top="0"
            left="0"
            bgcolor="var(--color-paper-gradient)"
            onClick={() => handleSelectItem("paper")}
          >
            <SelectedIcon src={paper} alt="paper" />
          </ChooseBox>

          {/* Scissors */}
          <ChooseBox
            top="0"
            left="100%"
            bgcolor="var( --color-scissors-gradient)"
            onClick={() => handleSelectItem("scissors")}
          >
            <SelectedIcon src={scissors} alt="scissors" />
          </ChooseBox>

          {/* Rock */}
          <ChooseBox
            top="100%"
            left="50%"
            bgcolor="var(--color-rock-gradient)"
            onClick={() => handleSelectItem("rock")}
          >
            <SelectedIcon src={rock} alt="rock" />
          </ChooseBox>
        </TriangleContainer>
      </Box>
    </Container>
  );
};
export default StarterComponent;
