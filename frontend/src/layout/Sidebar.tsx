import React from "react";
import styled from "styled-components";
import Snb from "../components/Snb";
import { GNB_HEIGHT, SNB_WIDTH } from "../utils/constant";

const SidebarStyle = styled.nav`
  background: #6faf72;
  width: ${SNB_WIDTH}px;
  height: 100%;
  padding-top: ${GNB_HEIGHT}px;
  position: fixed;
`;

const Sidebar = () => {
  return (
    <SidebarStyle>
      <Snb />
    </SidebarStyle>
  );
};

export default Sidebar;
