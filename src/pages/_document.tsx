import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />

        <body
          className={`
            text-neutral-700
            tracking-normal
            bg-neutral-10
            dark:text-neutral-30
            dark:bg-neutral-900
          `}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
