import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';

import ButtonDarkMode from './ButtonDarkMode';
import ButtonToggle from './ButtonToggle';
import { Container, BoxIcons } from './styles';

const NavMobilePortal = dynamic(() => import('@components/NavMobilePortal'), {
  ssr: false,
});

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="header-left">
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
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ButtonToggle
        className="menu-toggle"
        IsOpen={() => setIsOpen(state => !state)}
      />
      <NavMobilePortal open={isOpen}>
        <ButtonToggle
          className="menu-toggle on"
          IsOpen={() => setIsOpen(state => !state)}
        />
        <nav>
          <ul>
            <li>
              <Link href="/posts/newest">
                <a>Recentes</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
        <BoxIcons>
          <ButtonDarkMode />
          <a href="https://github.com/JohnAnon9771">
            <AiFillGithub size={22} color="var(--color-text-variant)" />
          </a>
        </BoxIcons>
      </NavMobilePortal>
      <div className="header-right">
        <ButtonDarkMode />
        <a href="https://github.com/JohnAnon9771">
          <AiFillGithub size={22} color="var(--color-text-variant)" />
        </a>
      </div>
    </Container>
  );
}
