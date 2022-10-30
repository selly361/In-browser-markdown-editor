import { closeModal, openModal } from "features/helperSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import BackDrop from "components/Backdrop/BackDrop";
import Button from "components/Shared/Button/Button";
import { DeleteIcon } from "assets";
import React from "react";
import { deleteDocument } from "features/documentSlice";
import styled from "styled-components";

const Modal = styled.div`
  width: 400px;
  height: max-content;
  background-color: ${({ theme }) => theme.modal};
  position: fixed;
  inset: 0;
  margin: auto;
  z-index: 100;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  text-align: center;
`;

const Title = styled.h3`
  color: white;
  font-weight: bold;
  height: max-content;
`;

const Desc = styled.p`
  height: max-content;
  color: #ced4da;
`;

const DocumentName = styled.h4`
  font-size: 1.1rem;
  color: var(--dark-orange);
  margin: 0 .3rem;
  width: max-content;
  margin: auto;
`;

const DeleteModal = () => {
  const dispatch = useAppDispatch();
  const { helper, document } = useAppSelector((state) => state);
  return (
    <>
      <BackDrop open={helper.modal.open}>
        <Modal>
          <Title>Delete this document?</Title>
          <Desc>
            Are you sure you want to delete
            <DocumentName>{document.currentDocument.name}</DocumentName>
            and its contents?<br /> This action cannot be reversed.
          </Desc>
          <Button onClick={() => {
            dispatch(deleteDocument())
            dispatch(closeModal())
          }} width="100%" iconStart={<DeleteIcon />}>Confirm & Delete</Button>
          <Button onClick={() => dispatch(closeModal())} width="100%">Cancel</Button>
        </Modal>
      </BackDrop>
    </>
  );
};

export default DeleteModal;
