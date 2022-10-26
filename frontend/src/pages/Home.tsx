import React from "react";
import styled from "styled-components";
import WorkList from "../components/WorkList";
import WorkListContainer from "../components/WorkListContainer";
import WorkSetting from "../components/WorkSetting";

const RootStyle = styled.main`
  background-color: pink;
  height: 100%;
  border: 1px solid black;
  display: flex;
`;

const Home = () => {
  return (
    <RootStyle>
      <WorkSetting />
      <WorkListContainer>
        <WorkList title="a" />
        <WorkList title="b" />
      </WorkListContainer>
    </RootStyle>
  );
};

export default Home;
