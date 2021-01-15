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

  useEffect(() => {
    console.log('test');
    if (open) {
      element.className = 'on';
    } else {
      element.removeAttribute('class');
    }
  }, [element, open]);

  return ReactDOM.createPortal(children, element);
}
