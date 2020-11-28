import { IoIosArrowForward } from 'react-icons/io';

import Image from 'next/image';

import Boop from '../Boop';
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
    <>
      <Container>
        <Content>
          <Image
            className="img_planet"
            src={image}
            width="56px"
            height="56px"
          />
          <h3>{title}</h3>
          <p>{description}</p>
        </Content>
        <span>
          Veja mais
          <Boop>
            <IoIosArrowForward color="var(--color-text-primary)" size={22} />
          </Boop>
        </span>
      </Container>
    </>
  );
}
