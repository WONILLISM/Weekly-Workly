import React from "react";
import styled from "styled-components";
import { GNB_HEIGHT } from "../utils/constant";

const HomeHeaderStyle = styled.div`
  background-color: #999999;
  height: ${GNB_HEIGHT}px;
`;

const HomeHeader = () => {
  return <HomeHeaderStyle>HomeHeader</HomeHeaderStyle>;
};

export default HomeHeader;
