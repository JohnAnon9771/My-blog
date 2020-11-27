import Image from 'next/image';
import { darken } from 'polished';

import { Theme } from '../../styles/Theme';
import { Container, Content } from './styles';

interface Props {
  title: string;
  image: string;
  description: string;
}

export default function CardPlanet({
  title,
  image,
  description,
}: Props): JSX.Element {
  return (
    <Container>
      <Content>
        <Image
          className="card_planets"
          src={image}
          width="56px"
          height="56px"
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </Content>
    </Container>
  );
}
