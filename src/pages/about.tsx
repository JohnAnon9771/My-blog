import { Wrapper } from '@styles/pages/About';

import { Section } from '@components';

export default function About(): JSX.Element {
  return (
    <Wrapper>
      <Section className="header" />
      <Section className="content"></Section>
    </Wrapper>
  );
}
