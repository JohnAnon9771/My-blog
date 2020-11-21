import { ReactNode, useContext } from 'react';

import { ThemeContext } from '../ThemeProvider';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <Container>
      <label>
        <input
          type="checkbox"
          checked={colorMode === 'dark'}
          onChange={ev => {
            setColorMode(ev.target.checked ? 'dark' : 'light');
          }}
        />{' '}
        Dark
      </label>
      {children}
    </Container>
  );
}
