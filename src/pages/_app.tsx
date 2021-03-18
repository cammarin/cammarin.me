import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { AppProvider } from '@/components/AppContext'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import '@/styles/base.css'
import '@/styles/components.css'
import '@/styles/utilities.css'

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: { theme?: string } }) => {
  const { height: windowHeight } = useWindowDimensions()

  if (windowHeight) {
    const vh = windowHeight * 0.01

    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

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
