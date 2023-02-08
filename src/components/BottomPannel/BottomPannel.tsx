import React from "react";
import styled from "styled-components";
import { useRules } from "../../zustand/RulesStore";
import { useSelectItem } from "../../zustand/SelectItemStore";
import { useWinner } from "../../zustand/WinnerStore";
import CustomButton from "../CustomButton/CustomButton";

const Container = styled.div`
  display: flex;
  align-self: flex-end;

  @media (max-width: 1000px) {
    align-self: center;
  }
`;

type BottomPannelProps = {};

const BottomPannel: React.FC<BottomPannelProps> = () => {
  const openRules = useRules((state) => state.openRules);
  const resetGame = useWinner((state) => state.resetGame);
  const selectItem = useSelectItem((state) => state.selectItem);
  const winCount = useWinner((state) => state.winCount);

  const handleShowRules = () => {
    openRules();
  };

  const handleResetGame = () => {
    resetGame();
    selectItem("");
  };

  return (
    <Container>
      {winCount !== 0 && (
        <CustomButton
          style="empty"
          text="Reset Game"
          onClick={handleResetGame}
        />
      )}

      <CustomButton style="empty" text="RULES" onClick={handleShowRules} />
    </Container>
  );
};
export default BottomPannel;
