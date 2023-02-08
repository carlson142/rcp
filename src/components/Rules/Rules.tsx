import React from "react";
import styled from "styled-components";
import rules from "../../imgs/image-rules.svg";
import close from "../../imgs/icon-close.svg";
import { useRules } from "../../zustand/RulesStore";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.575);

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  @media (max-width: 465px) {
    background-color: white;
  }
`;

const RulesBox = styled.div`
  height: max-content;
  width: max-content;
  padding: 5rem;
  padding-top: 2rem;

  background-color: white;
  border-radius: 1rem;

  position: relative;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4rem;

  @media (max-width: 465px) {
    justify-content: center;
  }
`;

const RulesImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CloseIcon = styled.img`
  height: 2rem;
  width: 2rem;

  cursor: pointer;

  @media (max-width: 465px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

const Heading = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  color: var(--dark-text);

  @media (max-width: 465px) {
    text-align: center;
  }
`;

type RulesProps = {};

const Rules: React.FC<RulesProps> = () => {
  const closeRules = useRules((state) => state.openRules);

  const handleCloseRules = () => {
    closeRules();
  };
  return (
    <Container>
      <RulesBox>
        <Box>
          <Heading>Rules</Heading>
          <CloseIcon src={close} alt="close" onClick={handleCloseRules} />
        </Box>
        <RulesImage src={rules} alt="Rules" />
      </RulesBox>
    </Container>
  );
};
export default Rules;
