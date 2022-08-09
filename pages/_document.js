import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
       
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icon/favicon-32x32.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/icon/favicon.ico"
        />
        <link
          rel="mask-icon"
          href="/images/icon/safari-pinned-tab.svg"
          color="#093b6b"
        />
        <link rel="manifest" href="/images/icon/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
