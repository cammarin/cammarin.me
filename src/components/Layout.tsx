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

      <Navbar>
        <Navbar.Brand>@cammarin</Navbar.Brand>

        <Navbar.Nav>
          <Navbar.Nav.Link href="/about">About</Navbar.Nav.Link>
          <Navbar.Nav.Link href="/guides">Guides</Navbar.Nav.Link>
          <Navbar.Nav.Link href="/works">Works</Navbar.Nav.Link>
        </Navbar.Nav>
      </Navbar>

      <main id="content">{children}</main>

      <footer></footer>
    </>
  )
}

export default Layout
