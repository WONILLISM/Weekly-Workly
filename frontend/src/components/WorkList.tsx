import React from "react";
import styled from "styled-components";

const WorkListStyle = styled.div`
  background-color: #aaaaaa;
  width: 90%;
  height: 45%;
  margin: 10px;
  border: 1px solid black;
`;

const WorkList = (props: any) => {
  const { title } = props;

  return <WorkListStyle>{title}</WorkListStyle>;
};

export default WorkList;
