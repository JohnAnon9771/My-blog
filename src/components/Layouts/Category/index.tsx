import dynamic from 'next/dynamic';

import { ReactNode } from 'react';

import { Container } from './styles';

const Header = dynamic(() => import('@components/Header'), { ssr: false });

interface Props {
  children: ReactNode;
}

export default function CategoryLayout({ children }: Props): JSX.Element {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
}
