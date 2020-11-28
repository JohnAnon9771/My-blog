import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  background: linear-gradient(
    180deg,
    var(--color-primary),
    55.73%,
    var(--color-categories) 100%
  );

  .wrapper_main {
    height: 100%;
    background-color: var(--color-variant);
    transition: background-color 350ms ease 0s;
  }

  main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'planets categories'
      'planets popular';
    gap: 64px 96px;
    position: relative;

    width: 100%;
    max-width: 1100px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 64px;

    z-index: 2;

    .planets {
      display: flex;
      flex-direction: column;
      grid-area: planets;

      a {
        text-decoration: none;
      }
    }

    .top_categories {
      grid-area: categories;
      font-size: var(--font-size-title);
    }

    .content_popular {
      grid-area: popular;
      font-size: var(--font-size-title);
    }
  }
`;

export const Container = styled.div`
  height: 400px;
  position: relative;

  .nave_img {
    position: absolute;
    z-index: 0;
    left: 65%;
    bottom: 50px;
  }

  .spacer {
    width: 48px;
    height: 48px;
  }
`;

export const Header = styled.div`
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
      font-size: 24px;
      letter-spacing: -1px;

      padding: 0px;
      margin-right: 35px;

      font-family: Roboto, sans-serif;
      text-decoration: none;
    }
  }

  .header_left {
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    width: 100px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Icons = styled.div`
  position: absolute;
  background-color: red;
  top: auto;
  bottom: auto;
  right: 0;
`;
