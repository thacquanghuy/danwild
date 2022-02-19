import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.cdnfonts.com/css/sofia-pro"
            rel="stylesheet"
          />
          <link
            href="https://fonts.cdnfonts.com/css/helvetica-neue-9"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
