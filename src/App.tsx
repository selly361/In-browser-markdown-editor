import { DeleteModal, Header, Main, Sidebar, Wrapper } from "components";

import { GlobalStyle } from "global/GlobalStyle";
import React from "react";
import styled from "styled-components";
import { useAppSelector } from "app/hooks";

const Body = styled.div`
  background: ${({theme}) => theme.background};     
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
  
  position: relative;
  width: calc(100vw + 300px);
  left: -300px;
  transition: 1s left;

  
  &.open {
    left: 0;
  }

  &.close {
    left: -300px;
  }
`



function App() {
  const { sideBarsOpen } = useAppSelector(state => state.helper)
  return (
    <Wrapper>
      <DeleteModal />
      <Body className={sideBarsOpen ? "open" : "close"}>
         <Sidebar />
        <Main />
      </Body>
    </Wrapper>
  );
}

export default App;
