import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { whoWin } from "../../helpers/helpers";
import { useSelectItem } from "../../zustand/SelectItemStore";
import { useWinner } from "../../zustand/WinnerStore";

import CustomButton from "../CustomButton/CustomButton";

const Container = styled.div`
  height: 55vh;
  max-width: 1100px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 50%;
`;

const Text = styled.h2`
  font-size: 3.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
`;

interface CBProps {
  selectedItem?: string;
}

const ChooseBox = styled.div<CBProps>`
  height: 35rem;
  width: 35rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  ${(props) =>
    props.selectedItem === "paper" &&
    `
    background-image: linear-gradient(var(--color-paper-gradient));
  `}

  ${(props) =>
    props.selectedItem === "rock" &&
    `
    background-image: linear-gradient(var(--color-rock-gradient));
  `}

${(props) =>
    props.selectedItem === "scissors" &&
    `
    background-image: linear-gradient(var(--color-scissors-gradient));
  `}

  transition: all 0.2s ease-in;

  cursor: pointer;
`;

const SelectedIcon = styled.img`
  height: 25rem;
  width: 25rem;
  object-fit: contain;

  padding: 6rem;
  background-color: #e4e3e3;
  border-radius: 50%;
`;

const Pulse = keyframes`
 from {
    transform: scale(1);
  }

  to {
    transform: scale(1.7);;
  }
`;

const AnimatedThing = styled.div`
  height: 20rem;
  width: 20rem;

  border-radius: 50%;

  background-color: var(--dark-text);
  animation: ${Pulse} 1s linear infinite;
`;

const ResultBlock = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const ResultText = styled.span`
  font-size: 5rem;
  text-transform: uppercase;

  color: white;

  margin-bottom: 2rem;
`;

type BattleComponentProps = {
  pickedItem: string;
};

const BattleComponent: React.FC<BattleComponentProps> = ({ pickedItem }) => {
  const [houseItem, setHouseItem] = useState<string>("");
  const [gameResult, setGameResult] = useState<string | undefined>("");

  const items = ["rock", "paper", "scissors"];

  const selectItem = useSelectItem((state) => state.selectItem);

  const addOne = useWinner((state) => state.addOne);
  const minusOne = useWinner((state) => state.minusOne);

  // RESET GAME
  const handlePlayAgain = () => {
    selectItem("");
    setGameResult("");
  };

  useEffect(() => {
    setTimeout(() => {
      const mN = Math.floor(Math.random() * 3);
      setHouseItem(items[mN]);

      // if (gameResult === "win") {
      //   addOne();
      // }
      // if (gameResult === "lose") {
      //   minusOne();
      // }
    }, 3000);
  }, []);

  useEffect(() => {
    const winner = whoWin(pickedItem, houseItem);
    setGameResult(winner);
  }, [houseItem]);

  console.log(gameResult);

  return (
    <Container>
      <Block>
        <Text>You Picked</Text>
        <ChooseBox selectedItem={pickedItem}>
          <SelectedIcon
            src={`../../src/imgs/icon-${pickedItem}.svg`}
            alt={pickedItem}
          />
        </ChooseBox>
      </Block>

      {houseItem && (
        <ResultBlock>
          {gameResult === "draw" ? (
            <ResultText>
              <span style={{ color: "hsl(40, 84%, 53%)" }}>Draw</span>
            </ResultText>
          ) : (
            <>
              {gameResult === "win" && (
                <ResultText>
                  You{" "}
                  <span style={{ color: "hsl(189, 58%, 57%)" }}>
                    {gameResult}
                  </span>
                </ResultText>
              )}
              {gameResult === "lose" && (
                <ResultText>
                  You{" "}
                  <span style={{ color: "hsl(349, 70%, 56%" }}>
                    {gameResult}
                  </span>
                </ResultText>
              )}
            </>
          )}

          <CustomButton
            text="Play Again"
            style="full"
            onClick={handlePlayAgain}
          />
        </ResultBlock>
      )}

      <Block>
        <Text>The House Picked</Text>
        <ChooseBox>
          {houseItem.length > 0 ? (
            <ChooseBox selectedItem={houseItem}>
              <SelectedIcon
                src={`../../src/imgs/icon-${houseItem}.svg`}
                alt={houseItem}
              />
            </ChooseBox>
          ) : (
            <AnimatedThing />
          )}
        </ChooseBox>
      </Block>
    </Container>
  );
};
export default BattleComponent;
