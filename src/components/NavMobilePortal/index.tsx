import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
  open: boolean;
}

export default function NavMobilePortal({
  children,
  open,
}: Props): JSX.Element {
  const element = document.getElementById('nav-mobile-portal');
  const body = document.getElementsByTagName('body');

  useEffect(() => {
    if (open) {
      element.className = 'on';
      body[0].style.overflow = 'hidden';
    } else {
      element.removeAttribute('class');
      body[0].removeAttribute('style');
    }
  }, [body, element, open]);

  return ReactDOM.createPortal(children, element);
}
