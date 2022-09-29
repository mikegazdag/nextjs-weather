import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' && (
            <meta name="robots" content="noindex" />
          )}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&League+Gothic&family=Mulish:wght@1000&display=swap"
            rel="stylesheet"
          ></link>
          {/*
          <meta name="description" content="TBD..." />
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
