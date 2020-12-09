import Link from 'next/link';

import { AiFillGithub } from 'react-icons/ai';

import ButtonDarkMode from './ButtonDarkMode';
import { Container } from './styles';

interface Props {
  colorMode: string;
  setColorMode: (newValue: string) => void;
}

export default function Header({
  colorMode,
  setColorMode,
}: Props): JSX.Element {
  return (
    <Container>
      <div className="header-right">
        <Link href="/">
          <a>
            <div className="brand">
              <span>John</span>
              <span>9771</span>
            </div>
          </a>
        </Link>
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
            <li>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-left">
        <ButtonDarkMode colorMode={colorMode} setColorMode={setColorMode} />

        <a href="https://github.com/JohnAnon9771">
          <AiFillGithub size={22} color="var(--color-text-variant)" />
        </a>
      </div>
    </Container>
  );
}
