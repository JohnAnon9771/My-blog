import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;

  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
  justify-content: space-between;

  width: 100%;
  max-width: 1100px;

  margin-left: auto;
  margin-right: auto;

  padding-left: 32px;
  padding-right: 32px;

  top: 0px;
  z-index: 2;

  .header-left {
    display: flex;
    align-items: baseline;

    a {
      text-decoration: none;
      color: var(--color-text-primary);
    }

    nav {
      display: var(--display-fl-screen);

      ul {
        display: flex;
        list-style: none;

        li {
          a {
            color: var(--color-text-variant);
            font-size: 0.875rem;
            font-weight: 500;
            margin: 15px;
            text-decoration: none;
          }
        }
      }
    }

    .brand {
      display: flex;
      justify-content: space-between;
      letter-spacing: -1px;

      width: 110px;

      padding: 0px;
      margin-right: 35px;

      font-weight: 600;
      font-size: 1.5rem;
      font-family: Roboto, sans-serif;
      text-decoration: none;
    }
  }

  .header-right {
    @media only screen and (max-width: 522px) {
      display: none;
    }

    a {
      margin-left: 2rem;
    }
  }
`;

export const BoxIcons = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;

  width: 70px;

  bottom: 0;
  left: 10px;
`;
