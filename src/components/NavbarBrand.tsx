import Link from 'next/link'

// Omit `href` because it's hard-coded.
type NavbarBrandProps = Omit<JSX.IntrinsicElements['a'], 'href'>

const NavbarBrand = ({ ...htmlAnchorProps }: NavbarBrandProps) => {
  return (
    <Link href="/">
      <a {...htmlAnchorProps} />
    </Link>
  )
}

export default NavbarBrand
