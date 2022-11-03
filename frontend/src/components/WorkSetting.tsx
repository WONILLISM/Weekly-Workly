import React, { useState } from "react";
import styled from "styled-components";

const WorkSettingStyle = styled.div`
  margin: 10px;
  border: 1px solid black;
  flex: 1;
`;

const initData = {
  title: "",
  date: "",
  email: "",
};

const WorkSetting = () => {
  const [data, setData] = useState(initData);

  return (
    <WorkSettingStyle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>업무 내역 설정</div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              type="text"
              value={data.title}
              onChange={(event) => {
                setData({ ...data, title: event.target.value });
              }}
            />
            <input
              type="text"
              value={data.date}
              onChange={(event) => {
                setData({ ...data, date: event.target.value });
              }}
            />
            <input
              type="text"
              value={data.email}
              onChange={(event) => {
                setData({ ...data, email: event.target.value });
              }}
            />
            <input type="submit" value="제출" />
            <input
              type="button"
              value="초기화"
              onClick={(event) => {
                setData(initData);
              }}
            />
          </div>
        </form>
      </div>
    </WorkSettingStyle>
  );
};

export default WorkSetting;
