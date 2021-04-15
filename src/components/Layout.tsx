import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Skippy from '@/components/Skippy'
import Utils from '@/lib/utils'

type LayoutProps = React.PropsWithChildren<{
  title?: string
  description: string
}>

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

      <div
        className={Utils.minifyString(`
          grid
          grid-rows-[min-content,1fr,min-content]
          gap-y-10
          max-w-3xl
          min-h-screen
          px-1.5
          mx-auto
          sm-mini:px-3.5
          sm-base:px-3
          sm-base:gap-y-12
          sm-plus:px-5
        `)}
      >
        <header id="masthead" className="py-1.5 xs-plus:py-3 sm-base:py-4">
          <Navbar aria-label="Main navigation">
            <Navbar.Brand>@cammarin</Navbar.Brand>

            <Navbar.Nav>
              <Navbar.Nav.Link href="/about">About</Navbar.Nav.Link>
              <Navbar.Nav.Link href="/articles">Articles</Navbar.Nav.Link>
              <Navbar.Nav.Link href="/projects">Projects</Navbar.Nav.Link>
            </Navbar.Nav>

            <Navbar.ThemeChanger />
          </Navbar>
        </header>

        <main id="content" className="px-2.5 sm-base:px-3">
          {children}
        </main>

        <footer
          id="colophon"
          className={Utils.minifyString(`
            flex
            justify-between
            px-1.5
            py-4
            sm-base:px-1
            sm-base:py-5
          `)}
        ></footer>
      </div>
    </>
  )
}

export default Layout
