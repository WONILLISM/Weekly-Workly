import React from "react";
import styled from "styled-components";

const WorkListContainerStyle = styled.div`
  background-color: #aaaaaa;
  margin: 10px;
  border: 1px solid black;
  flex: 1;
`;

const WorkListContainer = (props: any) => {
  return <WorkListContainerStyle>{props.children}</WorkListContainerStyle>;
};

export default WorkListContainer;
