import { AnimatePresence, motion } from "framer-motion";

import React from "react";
import { sidebarAnimation } from "global/animation";
import styled from "styled-components";
import { useAppSelector } from "app/hooks";

const StyledAside = styled(motion.aside)`
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.sideBar};
`;
const Sidebar = () => {
  const { sideBarsOpen } = useAppSelector((state) => state.helper);
  return (
    <AnimatePresence>
      {sideBarsOpen && (
        <StyledAside
          variants={sidebarAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Sidebar
        </StyledAside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
