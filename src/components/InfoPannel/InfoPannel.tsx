import React from "react";
import styled from "styled-components";
import { useWinner } from "../../zustand/WinnerStore";

const Container = styled.div`
  width: 50vw;
  padding: 1rem 3rem;

  border: 2px solid rgba(214, 213, 213, 0.3);
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
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

  @media (max-width: 600px) {
    font-size: 3rem;
  }
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

  @media (max-width: 600px) {
    width: 10rem;
  }
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

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

type InfoPannelProps = {};

const InfoPannel: React.FC<InfoPannelProps> = () => {
  const winCounter = useWinner((state) => state.winCount);

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
          <ScoreNumber>{winCounter}</ScoreNumber>
        </Score>
      </Right>
    </Container>
  );
};
export default InfoPannel;
