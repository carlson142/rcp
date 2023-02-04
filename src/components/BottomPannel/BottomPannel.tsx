import React from "react";
import styled from "styled-components";
import { useRules } from "../../zustand/RulesStore";
import CustomButton from "../CustomButton/CustomButton";

const Container = styled.div`
  display: flex;
`;

type BottomPannelProps = {};

const BottomPannel: React.FC<BottomPannelProps> = () => {
  const openRules = useRules((state) => state.openRules);

  const handleShowRules = () => {
    openRules();
  };

  return (
    <Container>
      <CustomButton style="empty" text="RULES" onClick={handleShowRules} />
    </Container>
  );
};
export default BottomPannel;
