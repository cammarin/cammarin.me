import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
