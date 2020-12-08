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

  .header_right {
    display: flex;
    align-items: baseline;

    a {
      text-decoration: none;
      color: var(--color-text-primary);
    }

    nav {
      display: flex;

      ul {
        display: flex;
        list-style: none;

        li {
          a {
            color: var(--color-text-variant);
            font-size: var(--font-size-subtitle);
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
      font-size: 24px;
      font-family: Roboto, sans-serif;
      text-decoration: none;
    }
  }

  .header_left {
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    width: 100px;
  }
`;
