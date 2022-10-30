import { CloseMenuIcon, DeleteIcon, DocumentIcon, LogoIcon, OpenMenuIcon, SaveIcon } from "assets";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";

import Button from "components/Shared/Button/Button";
import styled from "styled-components";
import { toggleSidebar } from "features/helperSlice";

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
`;

const DocumentDetailsWrapper = styled.div`
  height: 60%;
  border-left: 1px solid hsla(216, 8%, 38%, 1.00);
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
  
`

const Header = () => {
  const { helper, document } = useAppSelector((state) => state);
  const { currentDocument } = document;
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(currentDocument)

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
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </Fieldset>
        </DocumentDetailsWrapper>
      </ContainerOne>
      <ContainerTwo>
        <DeleteIcon />
        <Button iconStart={<SaveIcon />}>Save Changes</Button>
      </ContainerTwo>
    </StlyedHeader>
  );
};

export default Header;
