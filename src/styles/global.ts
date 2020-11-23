import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    outline: 0;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    color: var(--color-text-primary);
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  :root {
    --font-size-title: 1rem;
    --font-size-subtitle: 0.87rem;
    --font-size-lxtitle: 1.125rem;
  }
`;
