import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { AppProvider } from '@/components/AppContext'
import '@/styles/globals.css'

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: { theme?: string } }) => {
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

      <AppProvider>
        <ThemeProvider
          attribute="class"
          forcedTheme={Component.theme || undefined}
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </>
  )
}

export default App
