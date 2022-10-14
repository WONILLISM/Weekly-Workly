import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const GNB_HEIGHT = 60;
const SNB_WIDTH = 80;

const StyledGnb = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const RootStyle = styled.div`
  padding-top: ${GNB_HEIGHT}px;
  padding-left: ${SNB_WIDTH}px;
`;

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Header>
        <StyledGnb>
          <div className="gnb-title">Weekly Workly</div>
          <StyledWrapper>
            <div>상태</div>
            <div>사진</div>
            <div>
              <div>전유진</div>
              <div>Business Developer</div>
            </div>
          </StyledWrapper>
        </StyledGnb>
      </Header>
      <Sidebar></Sidebar>
      <RootStyle>
        <Outlet />
      </RootStyle>
    </>
  );
};

export default MainLayout;
