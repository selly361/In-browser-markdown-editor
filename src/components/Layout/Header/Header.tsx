import { CloseMenuIcon, LogoIcon, OpenMenuIcon } from "assets";
import { useAppDispatch, useAppSelector } from "app/hooks";

import React from "react";
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

const Header = () => {
  const { sideBarsOpen } = useAppSelector((state) => state.helper);
  const dispatch = useAppDispatch();
  return (
    <StlyedHeader>
      <ContainerOne>
        <BurgerWrapper onClick={() => dispatch(toggleSidebar())}>
          {sideBarsOpen ? <CloseMenuIcon /> : <OpenMenuIcon />}
        </BurgerWrapper>
        <LogoIcon />
        
      </ContainerOne>
    </StlyedHeader>
  );
};

export default Header;
