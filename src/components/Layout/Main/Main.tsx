import { Header } from "components";
import React from "react";
import styled from "styled-components";

const StyledMain = styled.main``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const MarkDownHeader = styled.div`
  
  
`

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Wrapper>
        <MarkDownHeader>
          
        </MarkDownHeader>
      </Wrapper>
    </StyledMain>
  );
};

export default Main;
