import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-primary);
  height: 100%;

  main {
    width: 100%;
    max-width: 1100px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;

    .section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 30vh;

      margin-bottom: 3.75rem;
    }
  }
`;
