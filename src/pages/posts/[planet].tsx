import { GetStaticPaths, GetStaticProps } from 'next';

import { useContext } from 'react';

import Header from '../../components/Header';
import { ThemeContext } from '../../components/ThemeProvider';

export default function PostsPerPlanet(): JSX.Element {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  return (
    <div>
      <Header colorMode={colorMode} setColorMode={setColorMode} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { planet: 'sun' } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const path = 'sun';
  return {
    props: { path },
  };
};
