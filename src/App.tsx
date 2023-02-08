import React from "react";
import styled from "styled-components";
import BattleComponent from "./components/BattleComponent/BattleComponent";
import BottomPannel from "./components/BottomPannel/BottomPannel";
import InfoPannel from "./components/InfoPannel/InfoPannel";
import Rules from "./components/Rules/Rules";
import StarterComponent from "./components/StarterComponent/StarterComponent";
import { useRules } from "./zustand/RulesStore";
import { useSelectItem } from "./zustand/SelectItemStore";

const Container = styled.main`
  min-height: 100vh;
  height: 100%;

  width: 100vw;

  padding: 3rem;

  background-image: linear-gradient(
    to bottom,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

const App: React.FC = () => {
  const openRules = useRules((state) => state.open);
  const pickedItem = useSelectItem((state) => state.item);

  return (
    <Container>
      {openRules && <Rules />}
      <InfoPannel />

      {pickedItem.length > 0 ? (
        <BattleComponent pickedItem={pickedItem} />
      ) : (
        <StarterComponent />
      )}
      <BottomPannel />
    </Container>
  );
};
export default App;
