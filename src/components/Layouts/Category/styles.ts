import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-primary);

  main {
    width: 100%;
    height: 100%;
    max-width: 1100px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 64px;
    padding-left: 32px;
    padding-right: 32px;

    .section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 30vh;
    }
  }
`;
