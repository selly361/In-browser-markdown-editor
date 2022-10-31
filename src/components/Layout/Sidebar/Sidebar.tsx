import { AnimatePresence, motion } from "framer-motion";
import { DarkModeIcon, DocumentIcon, LightModeIcon } from "assets";
import { useAppDispatch, useAppSelector } from "app/hooks";

import Button from "components/Shared/Button/Button";
import React from "react";
import { sidebarAnimation } from "global/animation";
import styled from "styled-components";
import { newDocument, toggleDocument } from "features/documentSlice";
import { toggleTheme } from "features/helperSlice";

const StyledAside = styled(motion.aside)`
  width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.sideBar};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Title = styled.h3`
  color: #adb5bd;
  font-size: 1rem;
  height: max-content;
  margin-bottom: .5rem;
`;

const ToggleInput = styled.input`
  appearance: none;
  position: relative;
  width: 48px;
  height: 24px;

  &:before {
    content: "";
    width: 48px;
    height: 24px;
    background-color: #5a6069;
    border-radius: 14.5px;
    display: inline-block;
    cursor: pointer;
  }

  &:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    right: 6px;
    transform: translateY(50%);
    transition: all 0.1s;
    cursor: pointer;
  }

  &:checked::after {
    right: 30px;
  }
`;

const ToggleThemeWrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  & > svg {
    &.active path {
      fill: var(--dark-orange);
    }

    &.active path {
      fill: var(--dark-orange);
    }
  }
`;

const Documents = styled.div`
  display: grid;
  gap: 0.3rem;

`;

const Document = styled.div`
display: flex;
gap: 1rem;
align-items: center;
cursor: pointer;
padding: .5rem;
transition: 1s background-color;
border-radius: 3px;

div:first-child {
    display: grid;
    gap: .3rem;
  }


  &.active {
    background-color: var(--black-1);
  }

  &:hover {
    background-color: var(--black-1);
  }
`;

const Time = styled.p`
  color: #adb5bd;
  font-size: .8rem;
`;

const DocName = styled.h5`
  color: white;
  font-weight: 600;
  font-size: 15px;
`;

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  return (
    <StyledAside>
      <div>
      <Title>MY DOCUMENTS</Title>
      <Button onClick={() => dispatch(newDocument())} width="100%">+ New Document</Button>
      </div>
      <Documents>
        {state.document.documents.map((doc) => (
          <Document onClick={() => dispatch(toggleDocument({ id: doc.id, name: doc.name }))} className={state.document.currentDocument.id === doc.id ? "active" : ''} key={doc.id}>
            <DocumentIcon />
            <div>
              <Time>{doc.createdAt}</Time>
              <DocName>{doc.name}.md</DocName>
            </div>
          </Document>
        ))}
      </Documents>
      <ToggleThemeWrap>
        <DarkModeIcon
          className={state.helper.theme === "dark" ? "active" : ""}
        />
        <ToggleInput
          type="checkbox"
          checked={state.helper.theme === "dark" ? true : false}
          onChange={() => dispatch(toggleTheme())}
        />
        <LightModeIcon
          className={state.helper.theme === "light" ? "active" : ""}
        />
      </ToggleThemeWrap>
    </StyledAside>
  );
};

export default Sidebar;
