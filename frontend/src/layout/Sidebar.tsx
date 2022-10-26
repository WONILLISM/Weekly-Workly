import React from "react";
import styled from "styled-components";
import Snb from "../components/Snb";
import { GNB_HEIGHT, SNB_WIDTH } from "../utils/constant";

const NavStyle = styled.nav`
  background: aqua;
  width: ${SNB_WIDTH}px;
  height: 100%;
  padding-top: ${GNB_HEIGHT}px;
  position: fixed;
`;

const Sidebar = () => {
  return (
    <NavStyle>
      <Snb />
    </NavStyle>
  );
};

export default Sidebar;
