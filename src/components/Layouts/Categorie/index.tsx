import { ReactNode } from 'react';

import Section from '@components/Section';

import { Wrapper } from './styles';

interface Props {
  title: string;
  children: ReactNode;
}

export default function LayoutCategorie({
  children,
  title,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <Section className="header">
        <h1>{title}</h1>
      </Section>
      <Section>{children}</Section>
    </Wrapper>
  );
}
