import dynamic from 'next/dynamic';

import { ReactNode, useContext } from 'react';

import { ThemeContext } from '@components/ThemeProvider';

import { Container, HeaderWrapper, Content } from './styles';
const Header = dynamic(() => import('@components/Header'), { ssr: false });

interface Props {
  className?: 'header';
  children?: ReactNode;
}

export default function Section({ className, children }: Props): JSX.Element {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  return (
    <Container className={className}>
      <HeaderWrapper>
        <div className="container">
          <Header colorMode={colorMode} setColorMode={setColorMode} />
        </div>
      </HeaderWrapper>
      <Content>{children}</Content>
    </Container>
  );
}
