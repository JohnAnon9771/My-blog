import { ReactNode } from 'react';

import { Section } from '@components';

import { Wrapper } from './styles';

interface Props {
  title: string;
  children: ReactNode;
}

export default function LayoutCategorie({
  title,
  children,
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
