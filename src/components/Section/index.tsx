import dynamic from 'next/dynamic';

import { ReactNode } from 'react';

import { Container, HeaderWrapper, Content } from './styles';
const Header = dynamic(() => import('@components/Header'), { ssr: false });

interface Props {
  className?: string;
  children?: ReactNode;
}

export default function Section({ className, children }: Props): JSX.Element {
  return (
    <Container className={className}>
      <HeaderWrapper>
        <div className="container">
          <Header />
        </div>
      </HeaderWrapper>
      <Content className={`content-${className}`}>{children}</Content>
    </Container>
  );
}
