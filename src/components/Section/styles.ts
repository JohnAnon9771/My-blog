import styled from 'styled-components';

export const Container = styled.div`
  --bg-color: var(--color-primary);

  &.header {
    --bg-color: var(--color-header);
    height: 400px;
  }

  background-color: var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip: rect(auto, auto, auto, auto);

  .container {
    background-color: var(--bg-color);
    z-index: 5;
    padding-bottom: 50px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const Content = styled.div`
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

  &.content-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    position: absolute;

    bottom: 0;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    max-width: 1100px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 64px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
