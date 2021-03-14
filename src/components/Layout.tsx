import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Skippy from '@/components/Skippy'

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

      <Skippy href="#content">Skip to main content</Skippy>

      <div className="page grid max-w-3xl min-h-screen px-6 mx-auto">
        <header id="masthead" className="py-4">
          <Navbar>
            <Navbar.Brand>@cammarin</Navbar.Brand>

            <Navbar.Nav>
              <Navbar.Nav.Link href="/about">About</Navbar.Nav.Link>
              <Navbar.Nav.Link href="/guides">Guides</Navbar.Nav.Link>
              <Navbar.Nav.Link href="/works">Works</Navbar.Nav.Link>
              <Navbar.Nav.ThemeChanger />
            </Navbar.Nav>
          </Navbar>
        </header>

        <main id="content" className="pt-14 px-3">
          {children}
        </main>

        <footer id="colophon"></footer>
      </div>
    </>
  )
}

export default Layout
