import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@/theme/index'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />

        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
