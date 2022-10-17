import React from "react";
import styled from "styled-components";
import Gnb from "../components/Gnb";

const GNB_HEIGHT = 60;

const StyledHeader = styled.header`
  background-color: #999999;
  width: 100%;
  height: ${GNB_HEIGHT}px;
  position: fixed;
  z-index: 99;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Gnb />
    </StyledHeader>
  );
};

export default Header;
