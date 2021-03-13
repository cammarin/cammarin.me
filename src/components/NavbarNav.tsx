import NavbarNavLink from '@/components/NavbarNavLink'
import NavbarNavThemeChanger from '@/components/NavbarNavThemeChanger'

type NavbarNavProps = JSX.IntrinsicElements['ul']

const NavbarNav = ({ className = '', ...htmlUListProps }: NavbarNavProps) => {
  return <ul className={`${className} flex`} {...htmlUListProps} />
}

NavbarNav.Link = NavbarNavLink
NavbarNav.ThemeChanger = NavbarNavThemeChanger

export default NavbarNav
