import React from "react";
import styled from "styled-components";
import BottomPannel from "./components/BottomPannel/BottomPannel";
import InfoPannel from "./components/InfoPannel/InfoPannel";

const Container = styled.main`
  min-height: 100vh;
  height: 100%;

  width: 100vw;

  background-image: linear-gradient(
    to right,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;
`;

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Container>
      <InfoPannel />
      <BottomPannel />
    </Container>
  );
};
export default App;
