import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GNB_HEIGHT, SNB_WIDTH } from "../utils/constant";
import Header from "./Header";
import Sidebar from "./Sidebar";

const RootStyle = styled.div`
  width: 100%;
  display: flex;
`;

const MainStyle = styled.div`
  width: 100%;
  margin-top: ${GNB_HEIGHT}px;
  margin-left: ${SNB_WIDTH}px;
`;

const MainLayout = () => {
  return (
    <RootStyle>
      <Header />
      <Sidebar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default MainLayout;
