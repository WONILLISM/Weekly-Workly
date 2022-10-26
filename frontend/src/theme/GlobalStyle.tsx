import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    width: 100%;
    height: 100%;
  }
  
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: normal;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
