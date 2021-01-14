import { ReactNode } from 'react';

import Section from '@components/Section';

import { Container } from './styles';

interface Props {
  children: ReactNode;
}

export default function CategoryLayout({ children }: Props): JSX.Element {
  return (
    <Container>
      <Section className="header">
        <h1>Lua</h1>
      </Section>
      <Section>
        <main>{children}</main>
      </Section>
    </Container>
  );
}
