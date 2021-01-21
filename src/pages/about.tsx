import dynamic from 'next/dynamic';

import { Wrapper } from '@styles/pages/About';

const Header = dynamic(() => import('@components/Header'), { ssr: false });

export default function About(): JSX.Element {
  return (
    <Wrapper>
      <Header />
      <main>
        <h1>João Alves</h1>
      </main>
    </Wrapper>
  );
}
