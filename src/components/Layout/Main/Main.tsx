import styled, { css } from "styled-components";

import { Header } from "components";
import React from "react";

const StyledMain = styled.main`
  height: calc(100vh - 72px);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
`;

const DefaultHeaderStyles = css`
  background-color: ${({ theme }) => theme.toggleBar};
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: width 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100%;
`;

const MarkDownContent = styled.div`
  height: 100%;
  width: 100%;
  
`;

const PreviewContent = styled.div`
  border-left: 1px solid hsla(213,4%,51%,1);
  height: 100%;
  width: 100%;
`;

const MarkDownHeader = styled.div`
  ${DefaultHeaderStyles}
`;

const PreviewHeader = styled.div`
  ${DefaultHeaderStyles}
`;

const Title = styled.h2`
  font-size: 13px;
  padding-left: 21px;
  margin-bottom: 0;
  font-family: Commissioner, sans-serif;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: hsla(213,4%,51%,1);

`;

const Textarea = styled.textarea`
  width: 100%;
  height: calc(100% - 42px);
  resize: none;
  background-color: ${({theme}) => theme.background};
  color: hsla(213,4%,51%,1);
  padding: 22px 16px;
`

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Wrapper>
        <MarkDownContent>
          <MarkDownHeader>
            <Title>MARKDOWN</Title>
          </MarkDownHeader>
          <Textarea></Textarea>
        </MarkDownContent>
        <PreviewContent>
          <PreviewHeader>
            <Title>PREVIEW</Title>
          </PreviewHeader>
          
        </PreviewContent>
      </Wrapper>
    </StyledMain>
  );
};

export default Main;
