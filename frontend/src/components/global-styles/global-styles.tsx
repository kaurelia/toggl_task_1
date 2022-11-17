import { css, Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          #root {
            width: 100vw;
            min-height: 100vh;
            background: #f3f5fd;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
