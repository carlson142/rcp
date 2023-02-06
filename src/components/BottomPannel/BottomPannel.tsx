import React from "react";
import styled from "styled-components";
import { useRules } from "../../zustand/RulesStore";
import { useWinner } from "../../zustand/WinnerStore";
import CustomButton from "../CustomButton/CustomButton";

const Container = styled.div`
  display: flex;
`;

type BottomPannelProps = {};

const BottomPannel: React.FC<BottomPannelProps> = () => {
  const openRules = useRules((state) => state.openRules);
  const addOne = useWinner((state) => state.addOne);

  const handleShowRules = () => {
    openRules();
  };

  // const test = () => {
  //   addOne();
  // };

  return (
    <Container>
      <CustomButton style="empty" text="RULES" onClick={handleShowRules} />
      {/* <CustomButton style="empty" text="add one" onClick={test} /> */}
    </Container>
  );
};
export default BottomPannel;
