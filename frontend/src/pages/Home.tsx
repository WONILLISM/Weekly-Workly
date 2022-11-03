import React from "react";
import styled from "styled-components";
import HomeHeader from "../components/HomeHeader";
import WorkList from "../components/WorkList";
import WorkListContainer from "../components/WorkListContainer";
import WorkSetting from "../components/WorkSetting";

const RootStyle = styled.main`
  background-color: pink;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const MainStyle = styled.main`
  display: flex;
`;

const Home = () => {
  return (
    <RootStyle>
      <HomeHeader />
      <MainStyle>
        <WorkSetting />
        <WorkListContainer>
          <WorkList title="a" />
          <WorkList title="b" />
        </WorkListContainer>
      </MainStyle>
    </RootStyle>
  );
};

export default Home;
