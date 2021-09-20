import { Global, css } from "@emotion/react";

const Colors = () => (
  <Global
    styles={css`
      :root {
        --color-primary: #0070f3;
        --color-secondary: #000;
      }
    `}
  />
);
export default Colors;
