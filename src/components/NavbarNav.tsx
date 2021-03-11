import NavbarNavLink from '@/components/NavbarNavLink'

type NavbarNavProps = JSX.IntrinsicElements['ul']

const NavbarNav = ({ className = '', ...htmlUListProps }: NavbarNavProps) => {
  return <ul className={`${className} flex`} {...htmlUListProps} />
}

NavbarNav.Link = NavbarNavLink

export default NavbarNav
