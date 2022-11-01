import {
  CloseMenuIcon,
  DeleteIcon,
  DocumentIcon,
  LogoIcon,
  OpenMenuIcon,
  SaveIcon,
} from "assets";
import React, { useState } from "react";
import {
  changeDocumentName,
  deleteDocument,
  saveDocument,
} from "features/documentSlice";
import { openModal, toggleSidebar } from "features/helperSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import Button from "components/Shared/Button/Button";
import { current } from "@reduxjs/toolkit";
import styled from "styled-components";

const StlyedHeader = styled.header`
  width: 100vw;
  height: 72px;
  background-color: #343a40;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BurgerWrapper = styled.div`
  width: 72px;
  height: 72px;
  background-color: #495057;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const ContainerOne = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  align-items: center;
  width: max-content;
`;

const DocumentDetailsWrapper = styled.div`
  height: 60%;
  border-left: 1px solid hsla(216, 8%, 38%, 1);
  padding-left: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #adb5bd;
`;

const Input = styled.input`
  color: white;
  font-weight: 600;
  font-size: 15px;
`;

const Fieldset = styled.fieldset`
  display: grid;
`;

const ContainerTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 1rem;

  path {
    transition: 1s fill;
  }

  button:disabled {
    &,
    svg {
      cursor: not-allowed;
    }

    svg:hover path {
      fill: #7c8187;
    }
  }

  svg:hover path {
    fill: var(--dark-orange);
  }
`;

const Header = () => {
  const { helper, document } = useAppSelector((state) => state);
  const { currentDocument } = document;
  const dispatch = useAppDispatch();

  return (
    <StlyedHeader>
      <ContainerOne>
        <BurgerWrapper onClick={() => dispatch(toggleSidebar())}>
          {helper.sideBarsOpen ? <CloseMenuIcon /> : <OpenMenuIcon />}
        </BurgerWrapper>
        <LogoIcon />
        <DocumentDetailsWrapper>
          <DocumentIcon />
          <Fieldset>
            <Label>Document Name</Label>
            <Input
              value={currentDocument.name}
              onChange={(e) => dispatch(changeDocumentName(e.target.value))}
            />
          </Fieldset>
        </DocumentDetailsWrapper>
      </ContainerOne>
      <ContainerTwo>
        <button
          onClick={() => dispatch(openModal("delete-modal"))}
          disabled={document.documents.length === 1}
        >
          <DeleteIcon />
        </button>
        <Button
          onClick={() => dispatch(saveDocument())}
          iconStart={<SaveIcon />}
        >
          Save Changes
        </Button>
      </ContainerTwo>
    </StlyedHeader>
  );
};

export default Header;
