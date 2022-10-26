import React from "react";
import styled from "styled-components";
import { GNB_HEIGHT, SNB_WIDTH } from "../utils/constant";

const HomeHeaderStyle = styled.div`
  background-color: #999999;
  width: 100%;
  height: ${GNB_HEIGHT}px;
  margin-top: ${GNB_HEIGHT}px;
  margin-left: ${SNB_WIDTH}px;
  position: fixed;
`;

const HomeHeader = () => {
  return (
    <HomeHeaderStyle>
      HomeHeader
    </HomeHeaderStyle>
  );
};

export default HomeHeader;
