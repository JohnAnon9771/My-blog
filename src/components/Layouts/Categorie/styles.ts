import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--color-primary);
  height: 100%;

  main {
    width: 100%;
    height: 1000px;
    max-width: 1100px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 64px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Container = styled.div`
  height: 400px;
  background: var(--color-header);
  position: sticky;
  z-index: 5;
  top: 0px;

  div {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
