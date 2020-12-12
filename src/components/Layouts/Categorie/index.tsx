import { ReactNode } from 'react';

import { Section } from '@components';

import { Wrapper } from './styles';

interface Props {
  children: ReactNode;
}

export default function LayoutCategorie({ children }: Props): JSX.Element {
  return (
    <Wrapper>
      <Section className="header">
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </Section>
      <Section>{children}</Section>
    </Wrapper>
  );
}
