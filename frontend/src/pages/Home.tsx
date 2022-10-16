import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RootStyle = styled.main`
  display: flex;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <RootStyle>
      <button
        onClick={() => {
          navigate("/todo");
        }}
      >
        button
      </button>
    </RootStyle>
  );
};

export default Home;
