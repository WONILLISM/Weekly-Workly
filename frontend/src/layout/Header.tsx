import React, { ReactNode } from "react";
import styled from "styled-components";

const GNB_HEIGHT = 60;

const StyledHeader = styled.header`
  background-color: #999999;
  width: 100%;
  height: ${GNB_HEIGHT}px;
  position: fixed;
  z-index: 99;
`;

interface HeaderProps {
  children: ReactNode;
}

const Header = (props: HeaderProps) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
