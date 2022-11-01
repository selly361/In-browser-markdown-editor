import { AnimatePresence, motion } from "framer-motion";

import React from "react";
import styled from "styled-components";

const StyledBackDrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${({theme}) => theme.backdrop};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const BackDrop = ({ open, children }: { open: boolean, children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {open && (
        <StyledBackDrop
          initial={{  y: "-100vh" }}
          animate={{ y: 0, transition: { duration: .5 } }}
          exit={{ y: "-100vh", transition: { duration: .5 } }}
        >
            {children}
        </StyledBackDrop>
      )}
    </AnimatePresence>
  );
};

export default BackDrop;
