import dynamic from 'next/dynamic';

import { ReactNode } from 'react';
const Header = dynamic(() => import('@components/Header'), { ssr: false });

import { Wrapper } from './styles';

interface Props {
  children: ReactNode;
  meta?: {
    title: string;
    description: string;
  };
}

export default function PostLayout({ children }: Props): JSX.Element {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
  );
}
