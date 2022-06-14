import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/javascript-canvas-to-blob/3.4.0/js/canvas-to-blob.min.js" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;