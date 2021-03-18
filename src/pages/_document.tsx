import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Utils from '@/lib/utils'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />

        <body
          className={Utils.minifyString(`
            overflow-x-hidden
            text-base
            text-neutral-700
            bg-neutral-10
            dark:text-neutral-30
            dark:bg-neutral-900
          `)}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
