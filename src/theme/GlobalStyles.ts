import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Fonts */
  @font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 100 900;
  font-display: optional;
  src: url(/fonts/ibm-plex-sans-var.woff2) format('woff2');
  }
  html, body {
    font-family: 'IBM Plex Sans', sans-serif;
    height: 100%;
  }
  #root {
    height: 100%;
  }
  /* Reset */
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
