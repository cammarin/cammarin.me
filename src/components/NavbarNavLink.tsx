import Link from 'next/link'

type NavbarNavLinkProps = JSX.IntrinsicElements['a']

const NavbarNavLink = ({
  href = '/',
  ...htmlAnchorProps
}: NavbarNavLinkProps) => {
  return (
    <li>
      <Link href={href}>
        <a {...htmlAnchorProps} />
      </Link>
    </li>
  )
}

export default NavbarNavLink
