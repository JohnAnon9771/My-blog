import Image from 'next/image';

import { useContext } from 'react';

import { CardPlanet, Header, Masker, ThemeContext } from '../components';

import constantPlanetData from '../constants/planets';
import { Container, Wrapper } from '../styles/pages/Home';

export default function Home(): JSX.Element {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <Wrapper>
      <Container>
        <div className="spacer" />
        <Header colorMode={colorMode} setColorMode={setColorMode} />
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
