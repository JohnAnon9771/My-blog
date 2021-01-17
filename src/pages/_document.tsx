import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { ScriptHydrationTheme } from '@lib/ScriptHydrationTheme';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: MyApp => props =>
            sheet.collectStyles(<MyApp {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          /> */}
          <meta name="application-name" content="JohnAnon9771 Blog" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="JohnAnon9771 Blog" />
          <meta
            name="description"
            content="Best JohnAnon9771 Blog in the world"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/static/icons/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://johonanon.vercel.app" />
          <meta name="twitter:title" content="JohnAnon9771 Blog" />
          <meta
            name="twitter:description"
            content="Best JohnAnon9771 Blog in the world"
          />
          <meta
            name="twitter:image"
            content="https://johonanon.vercel.app/static/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@vesla_panic" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="JohnAnon9771 Blog" />
          <meta
            property="og:description"
            content="Best blog about tecnologie in the world"
          />
          <meta property="og:site_name" content="JohnAnon9771 Blog" />
          <meta property="og:url" content="https://johonanon.vercel.app" />
          <meta
            property="og:image"
            content="https://johonanon.vercel.app/static/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <ScriptHydrationTheme />
          <div id="nav-mobile-portal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
