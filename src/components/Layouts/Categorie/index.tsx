import { ReactNode, useContext } from 'react';

import { ThemeContext, Header } from '@components';

interface Props {
  children: ReactNode;
}

export default function LayoutCategorie({ children }: Props): JSX.Element {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <div>
      <Header colorMode={colorMode} setColorMode={setColorMode} />
      <main>{children}</main>
    </div>
  );
}
