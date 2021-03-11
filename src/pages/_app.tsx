import { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="preload"
          href="/fonts/Inter/Inter-roman.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
