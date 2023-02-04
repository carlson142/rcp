import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50vw;
  padding: 1rem 3rem;

  border: 2px solid rgba(214, 213, 213, 0.3);
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;

  color: white;
`;

const Right = styled.div``;

const Score = styled.div`
  height: 100%;
  width: 17rem;

  background-color: white;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ScoreText = styled.p`
  font-size: 1.6rem;
  color: var(--score-text);
  text-transform: uppercase;
`;

const ScoreNumber = styled.span`
  font-size: 5rem;
  font-weight: 700;
  color: var(--dark-text);
`;

type InfoPannelProps = {};

const InfoPannel: React.FC<InfoPannelProps> = () => {
  return (
    <Container>
      <Left>
        <Text>Rock</Text>
        <Text>Paper</Text>
        <Text>Scissors</Text>
      </Left>

      <Right>
        <Score>
          <ScoreText>Score</ScoreText>
          <ScoreNumber>0</ScoreNumber>
        </Score>
      </Right>
    </Container>
  );
};
export default InfoPannel;
