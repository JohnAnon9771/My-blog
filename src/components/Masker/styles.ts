import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  position: absolute;

  overflow: hidden;

  left: 0px;
  right: 0px;
  bottom: 0px;

  width: 100%;
  height: 90px;

  transform: translateY(1px);
  z-index: 3;

  .svg {
    position: absolute;

    left: -3%;
    right: -3%;
    bottom: 0px;

    width: 106%;
    min-width: 600px;

    fill: var(--color-variant);
    transition: fill 350ms ease 0s;
  }
`;
