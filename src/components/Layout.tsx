import Head from 'next/head'

type LayoutProps = {
  title?: string
  description: string
  children?: React.ReactNode
}

const Layout = ({ title = '', description, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />

        <title>
          {title !== ''
            ? `${title} | @cammarin`
            : `@cammarin – Designer & Developer`}
        </title>
      </Head>

      <a href="#content">Skip to main content</a>

      <header></header>

      <main id="content">{children}</main>

      <footer></footer>
    </>
  )
}

export default Layout
