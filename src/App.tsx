import React from "react";
import styled from "styled-components";
import InfoPannel from "./components/InfoPannel/InfoPannel";

const Container = styled.div`
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

  padding: 3rem;
`;

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Container>
      <InfoPannel />
    </Container>
  );
};
export default App;
