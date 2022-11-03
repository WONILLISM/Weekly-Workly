import React from "react";
import styled from "styled-components";

const WorkSettingStyle = styled.div`
  margin: 10px;
  border: 1px solid black;
  flex: 1;
`;

const WorkSetting = () => {
  return (
    <WorkSettingStyle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>업무 내역 설정</div>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input />
            <input />
            <input />
            <button>버튼</button>
          </div>
        </form>
      </div>
    </WorkSettingStyle>
  );
};

export default WorkSetting;
