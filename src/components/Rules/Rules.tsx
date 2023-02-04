import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RulesBox = styled.div`
  height: max-content;
  width: max-content;
`;

type RulesProps = {};

const Rules: React.FC<RulesProps> = () => {
  return (
    <Container>
      <RulesBox></RulesBox>
    </Container>
  );
};
export default Rules;
