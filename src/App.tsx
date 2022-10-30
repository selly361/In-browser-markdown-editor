import { DeleteModal, Header, Main, Sidebar, Wrapper } from "components";

import { GlobalStyle } from "global/GlobalStyle";
import React from "react";
import styled from "styled-components";
import { useAppSelector } from "app/hooks";

const Body = styled.div`
  background: ${({theme}) => theme.background};     
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
`



function App() {
  return (
    <Wrapper>
      <DeleteModal />
      <Body>
         <Sidebar />
        <Main />
      </Body>
    </Wrapper>
  );
}

export default App;
