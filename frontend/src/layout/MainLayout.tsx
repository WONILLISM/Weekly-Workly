import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GNB_HEIGHT, SNB_WIDTH } from "../utils/constant";
import Header from "./Header";
import Sidebar from "./Sidebar";

const RootStyle = styled.div`
  padding-top: ${GNB_HEIGHT}px;
  padding-left: ${SNB_WIDTH}px;
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <RootStyle>
        <Outlet />
      </RootStyle>
    </>
  );
};

export default MainLayout;
