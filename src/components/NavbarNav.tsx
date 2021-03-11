import NavbarNavLink from '@/components/NavbarNavLink'

type NavbarNavProps = JSX.IntrinsicElements['ul']

const NavbarNav = ({ ...htmlUListProps }: NavbarNavProps) => {
  return <ul {...htmlUListProps} />
}

NavbarNav.Link = NavbarNavLink

export default NavbarNav
