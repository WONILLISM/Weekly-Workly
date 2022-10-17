import React from "react";
import styled from "styled-components";
import Snb from "../components/Snb";

const GNB_HEIGHT = 60;
const SNB_WIDTH = 80;

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
