import React from "react";
import styled from "styled-components";

const WorkListContainerStyle = styled.div`
  background-color: #aaaaaa;
  width: 45%;
  height: 90%;
  margin: 10px;
  border: 1px solid black;
`;

const WorkListContainer = (props: any) => {
  return <WorkListContainerStyle>{props.children}</WorkListContainerStyle>;
};

export default WorkListContainer;
