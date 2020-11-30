import { AppProps } from 'next/app';

import { ThemeProvider } from '../components';

import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
