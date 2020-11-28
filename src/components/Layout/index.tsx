import { useContext } from 'react';
import { AiFillGithub } from 'react-icons/ai';

import Image from 'next/image';
import Link from 'next/link';

import constantPlanetData from '../../constants/planets';
import BtnDarkMode from '../ButtonDarkMode';
import CardPlanet from '../CardPlanet';
import Masker from '../Masker';
import { ThemeContext } from '../ThemeProvider';
import { Wrapper, Container, Header } from './styles';

// interface Props {
//   children?: ReactNode;
// }

export default function Layout(): JSX.Element {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <Wrapper>
      <Container>
        <div className="spacer" />
        <Header>
          <div className="header_right">
            <div className="brand">
              <span>John</span>
              <span>9771</span>
            </div>
            <nav>
              <ul>
                <li>
                  <Link href="/posts/newest">
                    <a>Recentes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts">
                    <a>Postagens</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header_left">
            <BtnDarkMode colorMode={colorMode} setColorMode={setColorMode} />

            <a href="https://github.com/JohnAnon9771">
              <AiFillGithub size={22} color="var(--color-text-variant)" />
            </a>
          </div>
        </Header>
        <Masker />
        <div className="nave_img">
          <Image
            src={colorMode === 'dark' ? '/rocket.svg' : '/spaceman.svg'}
            height="250px"
            width="250px"
          />
        </div>
      </Container>
      <div className="wrapper_main">
        <main>
          <section className="planets">
            <h3>CONTÉUDO</h3>
            {constantPlanetData.map(planet => (
              <CardPlanet
                key={planet.id}
                title={planet.title}
                description={planet.description}
                image={planet.image}
                categorie={planet.categorie}
              />
            ))}
          </section>
          <section className="top_categories">
            <h3>PRINCIPAIS CATEGORIAS</h3>
          </section>
          <section className="content_popular">
            <h3>CONTÉUDO POPULAR</h3>
          </section>
        </main>
      </div>
    </Wrapper>
  );
}
