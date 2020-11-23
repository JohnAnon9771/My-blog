import styled from 'styled-components';

export const Button = styled.button`
  margin: 0px;
  padding: 0px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  /* opacity: 0.7; */
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 32px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  .svg_darkmode {
    position: relative;
    overflow: visible;
    transform: rotate(90deg);
  }
`;
