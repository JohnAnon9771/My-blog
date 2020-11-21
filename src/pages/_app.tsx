import { AppProps } from 'next/app';

import { Layout } from '../components';
import { ThemeProvider } from '../components/ThemeProvider';

import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
}
