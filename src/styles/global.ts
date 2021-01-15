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

    &::-webkit-scrollbar-track {
      background-color: var(--color-primary);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-text-primary);
      border-radius: 1rem;
    }

    #nav-mobile-portal {
      display: none;

      &.on {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 10;

        height: 100vh;
        width: 100vw;

        background-color: var(--color-primary);
        opacity: 0.9;

        nav {
          ul {
            list-style: none;
            position: absolute;
            left: 65px;

            li {
              margin: 22px;

              a {
                color: var(--color-text-variant);
                font-size: 1rem;
                font-weight: 600;

                text-decoration: none;
              }
            }
          }
        }
      }
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
    --display-fl-screen: flex;

    @media (max-width: 522px) {
      --display-fl-screen: none;
    }
  }
`;
