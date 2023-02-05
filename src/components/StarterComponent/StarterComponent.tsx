import React from "react";
import styled from "styled-components";

import triangle from "../../../public/bg-triangle.svg";
import rock from "../../../public/icon-rock.svg";
import paper from "../../../public/icon-paper.svg";
import scissors from "../../../public/icon-scissors.svg";

const Container = styled.div`
  height: 55vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div``;

const TriangleContainer = styled.div`
  position: relative;
`;

const Triangle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
`;

const IconPaper = styled.img`
  height: 15rem;
  width: 15rem;
  object-fit: contain;

  padding: 3rem;
  background-color: #e4e3e3;
  border-radius: 50%;
`;

type StarterComponentProps = {};

const StarterComponent: React.FC<StarterComponentProps> = () => {
  return (
    <Container>
      <Box>
        <TriangleContainer>
          <Triangle src={triangle} alt="triangle" />
          {/* Paper */}
          <ChooseBox top="0" left="0" bgcolor="var(--color-paper-gradient)">
            <IconPaper src={paper} alt="paper" />
          </ChooseBox>

          {/* Scissors */}
          <ChooseBox
            top="0"
            left="100%"
            bgcolor="var( --color-scissors-gradient)"
          >
            <IconPaper src={scissors} alt="paper" />
          </ChooseBox>

          {/* Rock */}
          <ChooseBox top="100%" left="50%" bgcolor="var(--color-rock-gradient)">
            <IconPaper src={rock} alt="paper" />
          </ChooseBox>
        </TriangleContainer>
      </Box>
    </Container>
  );
};
export default StarterComponent;
