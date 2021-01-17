import Head from 'next/head';

import { Wrapper } from '@styles/pages/About';

import { Section } from '@components';

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <Wrapper>
        <Section>
          <main>
            <h1>João Alves</h1>
          </main>
        </Section>
      </Wrapper>
    </>
  );
}
