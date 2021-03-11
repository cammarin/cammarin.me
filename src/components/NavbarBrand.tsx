import Link from 'next/link'

// Omit `href` because it's hard-coded.
type NavbarBrandProps = Omit<JSX.IntrinsicElements['a'], 'href'>

const NavbarBrand = ({
  className = '',
  ...htmlAnchorProps
}: NavbarBrandProps) => {
  return (
    <Link href="/">
      <a
        className={`${className} inline-block p-3 text-xl font-medium leading-6`}
        {...htmlAnchorProps}
      />
    </Link>
  )
}

export default NavbarBrand
