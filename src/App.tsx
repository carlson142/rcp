import React from "react";
import styled from "styled-components";
import BottomPannel from "./components/BottomPannel/BottomPannel";
import InfoPannel from "./components/InfoPannel/InfoPannel";
import Rules from "./components/Rules/Rules";
import StarterComponent from "./components/StarterComponent/StarterComponent";
import { useRules } from "./zustand/RulesStore";

const Container = styled.main`
  min-height: 100vh;
  height: 100%;

  width: 100vw;

  padding: 3rem;

  background-image: linear-gradient(
    to right,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const openRules = useRules((state) => state.open);

  return (
    <Container>
      {openRules && <Rules />}
      <InfoPannel />
      <StarterComponent />
      <BottomPannel />
    </Container>
  );
};
export default App;
