import Image from 'next/image';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';
import { animated } from 'react-spring';

import { useBoop } from '@hooks/useBoop';

import { Container, Content } from './styles';

interface Props {
  title: string;
  image: string;
  description: string;
  categorie: string;
}

export default function CardPlanet({
  title,
  image,
  description,
  categorie,
}: Props): JSX.Element {
  const [style, trigger] = useBoop({ x: 5 });
  return (
    <Link href={`/categories/${categorie}`}>
      <a>
        <Container onMouseEnter={trigger}>
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
            <animated.span className="boop" style={style}>
              <IoIosArrowForward color="var(--color-text-primary)" size={22} />
            </animated.span>
          </span>
        </Container>
      </a>
    </Link>
  );
}
