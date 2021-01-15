import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

export default function NavMobilePortal({ children }: Props): JSX.Element {
  const element = document.getElementById('nav-mobile-portal');
  return ReactDOM.createPortal(children, element);
}