import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';

import ButtonDarkMode from './ButtonDarkMode';
import ButtonToggle from './ButtonToggle';
import * as S from './styles';

const NavMobilePortal = dynamic(() => import('@components/NavMobilePortal'), {
  ssr: false,
});

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.HeaderLeft>
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
      </S.HeaderLeft>
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
        <S.HeaderIcons>
          <ButtonDarkMode />
          <a href="https://github.com/JohnAnon9771">
            <AiFillGithub size={22} color="var(--color-text-variant)" />
          </a>
        </S.HeaderIcons>
      </NavMobilePortal>
      <S.HeaderRight>
        <ButtonDarkMode />
        <a href="https://github.com/JohnAnon9771">
          <AiFillGithub size={22} color="var(--color-text-variant)" />
        </a>
      </S.HeaderRight>
    </S.Container>
  );
}
