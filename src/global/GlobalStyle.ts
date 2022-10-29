import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-1000: #151619;
  --color-900: #1d1f22;
  --color-800: #2b2d31;
  --color-700: #35393f;
  --color-600: #5a6069;
  --color-500: #7c8187;
  --color-400: #c1c4cb;
  --color-300: #e4e4e4;
  --color-200: #f5f5f5;
  --color-100: #ffffff;
  --color-orange: #e46643;
  --color-orange-hover: #f39765;
  font-family: "Roboto Slab", serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
}

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  -webkit-tap-highlight-color: none;
}

html {
  box-sizing: border-box;
}

body {
  background-color: #000;
}

button {
  border: none;
  background-color: none;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

img {
  width: 100%;
}

`;
