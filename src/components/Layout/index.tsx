import { useContext } from 'react';

import Image from 'next/image';

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
          <div className="brand">
            <span>John</span>
            <span>9771</span>
          </div>
          <nav>
            <ul>
              <li>Recentes</li>
              <li>Postagens</li>
            </ul>
          </nav>
          <BtnDarkMode colorMode={colorMode} setColorMode={setColorMode} />
        </Header>
        <Masker />
        <div className="nave_img">
          <Image
            src={colorMode === 'dark' ? '/rocket.png' : '/spaceman.png'}
            height="250px"
            width="250px"
          />
        </div>
      </Container>
      <div className="wrapper_main">
        <main>
          <section className="planets">
            <div className="grid_planets">
              <CardPlanet
                src="/uranus.png"
                planet="uranus"
                colorMode={colorMode}
              />
              <CardPlanet
                src="/earth.png"
                planet="earth"
                colorMode={colorMode}
              />
              <CardPlanet src="/mars.png" planet="mars" colorMode={colorMode} />
              <CardPlanet src="/sun.png" planet="sun" colorMode={colorMode} />
              <CardPlanet
                src="/neptune.png"
                planet="neptune"
                colorMode={colorMode}
              />

              <CardPlanet src="/moon.png" planet="moon" colorMode={colorMode} />
            </div>
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
