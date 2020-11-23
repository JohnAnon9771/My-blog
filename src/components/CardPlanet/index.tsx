import Image from 'next/image';
import { darken } from 'polished';

import { Theme } from '../../styles/Theme';
import { Container, Content } from './styles';

interface Props {
  src: string;
  planet: string;
  colorMode: string;
}

export default function CardPlanet({
  src,
  planet,
  colorMode,
}: Props): JSX.Element {
  const isDark = colorMode === 'dark' ? true : false;
  return (
    <Container
      planet={planet}
      style={{
        background: isDark ? darken(0.2, Theme.dark[planet]) : '#FFFF',
      }}
    >
      <Image src={src} width="50px" height="50px" />
      <Content></Content>
    </Container>
  );
}
