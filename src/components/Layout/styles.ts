import styled from 'styled-components';

export const Container = styled.div`
  grid-template-areas:
    '. header header .'
    '. . . .'
    '. categories aside .'
    ' . categories aside . ';
  background: var(--color-primary);
  color: var(--color-text-primary);

  .header {
    grid-area: 'header';
  }
`;
