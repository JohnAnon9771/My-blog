import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

import { useContext } from 'react';

import constantPlanetData from '@constants/planets';
import { Container, Main, Wrapper } from '@styles/pages/Home';

import { CardPlanet, Masker, ThemeContext } from '@components';
const Header = dynamic(() => import('@components/Header'), { ssr: false });

export default function Home(): JSX.Element {
  const { colorMode } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <Container>
          <div className="spacer" />
          <Header />
          <Masker />
          <div className="nave_img">
            <Image
              src={
                colorMode === 'dark'
                  ? '/images/rocket.svg'
                  : '/images/spaceman.svg'
              }
              height="250px"
              width="250px"
              alt="Image for apresentation"
            />
          </div>
        </Container>
        <div className="wrapper_main">
          <Main>
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
          </Main>
        </div>
      </Wrapper>
    </>
  );
}
