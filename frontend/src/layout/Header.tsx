import React from "react";
import styled from "styled-components";
import Gnb from "../components/Gnb";
import { GNB_HEIGHT } from "../utils/constant";

const HeaderStyle = styled.header`
  background-color: #999999;
  width: 100%;
  height: ${GNB_HEIGHT}px;
  position: fixed;
  z-index: 99;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Gnb />
    </HeaderStyle>
  );
};

export default Header;
