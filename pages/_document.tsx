import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {/* <Script key='test' strategy="beforeInteractive"  src='/scripts/antd.js'/> */}
        <Script
          key={"item"}
          src={"//cdn.staticfile.org/react/18.2.0/umd/react.production.min.js"}
          strategy="beforeInteractive"
        />
        <Script
          key={"item2"}
          src={"//cdn.staticfile.org/react-dom/18.2.0/umd/react-dom.production.min.js"}
          strategy="beforeInteractive"
        />
        <NextScript />
      </body>
    </Html>
  );
}
