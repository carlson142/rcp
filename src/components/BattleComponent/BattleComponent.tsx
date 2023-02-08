import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colorArray, whoWin } from "../../helpers/helpers";
import { useSelectItem } from "../../zustand/SelectItemStore";
import { useWinner } from "../../zustand/WinnerStore";

import CustomButton from "../CustomButton/CustomButton";
import { Fireworks } from "fireworks/lib/react";

const Container = styled.div`
  height: 55vh;
  max-width: 1100px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;

  @media (max-width: 1000px) {
    position: relative;
    transform: translateY(3rem);
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 50%;

  @media (max-width: 1000px) {
    height: 35rem;
  }

  @media (max-width: 600px) {
    height: 25rem;
  }
`;

const Text = styled.h2`
  font-size: 3.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;

  @media (max-width: 1000px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    text-align: center;
  }
`;

interface CBProps {
  selectedItem?: string;
  gameStatus?: string;
}

const ChooseBox = styled.div<CBProps>`
  height: 35rem;
  width: 35rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  box-shadow: 0px 10px 0px #acacac97, 0px 0px 0px #111;

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

  @media (max-width: 1000px) {
    height: 25rem;
    width: 25rem;
  }

  @media (max-width: 600px) {
    height: 15rem;
    width: 15rem;
    box-shadow: 0px 6px 0px #acacac97, 0px 0px 0px #111;
  }
`;

const ChooseWrapperBox = styled.div`
  height: 35rem;
  width: 35rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    height: 25rem;
    width: 25rem;
  }

  @media (max-width: 600px) {
    height: 15rem;
    width: 15rem;
  }
`;

const SelectedIcon = styled.img`
  height: 25rem;
  width: 25rem;
  object-fit: contain;

  padding: 6rem;
  background-color: #e4e3e3;
  border-radius: 50%;

  box-shadow: 0px 0px 0px #888, 0px -10px 0px #acacac;

  @media (max-width: 1000px) {
    height: 20rem;
    width: 20rem;

    padding: 3rem;
  }

  @media (max-width: 600px) {
    height: 10rem;
    width: 10rem;
    box-shadow: 0px 0px 0px #888, 0px -6px 0px #acacac;
  }
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

  @media (max-width: 600px) {
    height: 10rem;
    width: 10rem;
  }
`;

const ResultBlock = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ResultText = styled.span`
  font-size: 5rem;
  text-transform: uppercase;

  color: white;

  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

type BattleComponentProps = {
  pickedItem: string;
};

const BattleComponent: React.FC<BattleComponentProps> = ({ pickedItem }) => {
  const [houseItem, setHouseItem] = useState<string>("");
  const [gameResult, setGameResult] = useState<string | undefined>("");
  const [showGameResult, setShowGameResult] = useState<boolean>(false);

  const items = ["rock", "paper", "scissors"];

  const selectItem = useSelectItem((state) => state.selectItem);

  const addOne = useWinner((state) => state.addOne);
  const minusOne = useWinner((state) => state.minusOne);

  // FIREWORKS
  let fxProps = {
    count: 4,
    interval: 500,
    colors: colorArray,
    calc: (props: any, i: any) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 4) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
    canvasWidth: 500,
    canvasHeight: 800,
  };

  // RESET GAME
  const handlePlayAgain = () => {
    selectItem("");
    setGameResult("");
  };

  // Pick house item and show result of game. Run when component mount
  useEffect(() => {
    const mN = Math.floor(Math.random() * 3);
    setHouseItem(items[mN]);

    setTimeout(() => {
      setShowGameResult(true);
    }, 3000);
  }, []);

  // Determine winner. Setting the result of game. Run when house picks item
  useEffect(() => {
    const winner = whoWin(pickedItem, houseItem);
    setGameResult(winner);
  }, [houseItem]);

  // Updating game resul counter. Run when game result show
  useEffect(() => {
    if (gameResult === "win") {
      addOne();
    }
    if (gameResult === "lose") {
      minusOne();
    }
    if (gameResult === "draw") return;
  }, [showGameResult]);

  return (
    <Container>
      {gameResult === "win" && showGameResult === true && (
        <Fireworks {...fxProps} />
      )}

      <Block>
        <Text>You Picked</Text>
        <ChooseBox selectedItem={pickedItem} gameStatus={gameResult}>
          <SelectedIcon
            src={`../../src/imgs/icon-${pickedItem}.svg`}
            alt={pickedItem}
          />
        </ChooseBox>
      </Block>

      {showGameResult && (
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

        <ChooseWrapperBox>
          {showGameResult ? (
            <ChooseBox selectedItem={houseItem}>
              <SelectedIcon
                src={`../../src/imgs/icon-${houseItem}.svg`}
                alt={houseItem}
              />
            </ChooseBox>
          ) : (
            <AnimatedThing />
          )}
        </ChooseWrapperBox>
      </Block>
    </Container>
  );
};
export default BattleComponent;
