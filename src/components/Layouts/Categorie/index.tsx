import dynamic from 'next/dynamic';

import { ReactNode, useContext } from 'react';

import { ThemeContext } from '@components';

import { Container, Wrapper } from './styles';
const Header = dynamic(() => import('@components/Header'), { ssr: false });

interface Props {
  children: ReactNode;
}

export default function LayoutCategorie({ children }: Props): JSX.Element {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Container>
        <Header colorMode={colorMode} setColorMode={setColorMode} />
      </Container>
      <main>{children}</main>
    </Wrapper>
  );
}
