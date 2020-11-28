import { ReactNode } from 'react';
import { animated } from 'react-spring';

import { useBoop } from '../../hooks/useBoop';

interface Props {
  children: ReactNode;
}

export default function Boop({ children, ...boopConfig }: Props): JSX.Element {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
}
