import React from "react";
import styled from "styled-components";

const RootStyle = styled.div`
  height: 100%;
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapperStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Gnb = () => {
  return (
    <RootStyle>
      <div className="gnb-title">Weekly Workly</div>
      <WrapperStyle>
        <div>상태</div>
        <div>사진</div>
        <div>
          <div>전유진</div>
          <div>Business Developer</div>
        </div>
      </WrapperStyle>
    </RootStyle>
  );
};

export default Gnb;
