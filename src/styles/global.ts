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
    transition: color 350ms ease 0s;

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-track{
      background-color: var(--color-primary);
    }

    &::-webkit-scrollbar-thumb{
      background-color: var(--color-text-primary);
      border-radius: 1rem;
    }
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    font-size: 16px;
  }
`;
