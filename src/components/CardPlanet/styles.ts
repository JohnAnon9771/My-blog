import styled from 'styled-components';

export const Container = styled.div<{ planet: string }>`
  width: 209px;
  height: 282px;
  box-shadow: 4px 2px 4px 2px var(--color-${props => props.planet}),
    0px 4px 4px var(--color-${props => props.planet});
  border-radius: 15px;

  break-inside: avoid;
`;

export const Content = styled.div``;
