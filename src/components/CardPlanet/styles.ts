import styled from 'styled-components';

export const Container = styled.div`
  color: var(--color-text-variant);
  margin-top: 40px;
  margin-bottom: 40px;

  cursor: pointer;

  &:hover {
    div {
      h3 {
        color: var(--color-text-secondary);
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: baseline;
    line-height: 10px;

    font-weight: 600;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 22px;
    padding-top: 10px;
  }

  p {
    font-weight: 700;
    font-size: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
