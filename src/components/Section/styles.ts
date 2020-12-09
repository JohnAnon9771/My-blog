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

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const Content = styled.div``;
