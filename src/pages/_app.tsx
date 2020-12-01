import { AppProps } from 'next/app';

import GlobalStyle from '@styles/global';

import { ThemeProvider } from '@components';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
