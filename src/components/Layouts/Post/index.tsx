import Head from 'next/head';

import { ReactNode } from 'react';

import { Section } from '@components';

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
    <>
      {/* <Head>
        <title>{meta.title}</title>
      </Head> */}
      <Wrapper>
        <Section>{children}</Section>
      </Wrapper>
    </>
  );
}
