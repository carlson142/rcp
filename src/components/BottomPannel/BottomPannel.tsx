import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

const Container = styled.div`
  display: flex;
`;

type BottomPannelProps = {};

const BottomPannel: React.FC<BottomPannelProps> = () => {
  return (
    <Container>
      <CustomButton style="empty" text="RULES" />
    </Container>
  );
};
export default BottomPannel;
