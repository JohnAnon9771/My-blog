import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-size-title: 1rem;
    --font-size-subtitle: 0.87rem;
    --font-size-lxtitle: 1.125rem;
  }
`;
