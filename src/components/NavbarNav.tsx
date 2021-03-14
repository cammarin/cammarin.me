import NavbarNavLink from '@/components/NavbarNavLink'
import NavbarNavThemeChanger from '@/components/NavbarNavThemeChanger'
import Utils from '@/lib/utils'

type NavbarNavProps = JSX.IntrinsicElements['ul']

const NavbarNav = ({ className = '', ...htmlUListProps }: NavbarNavProps) => {
  return (
    <ul
      className={Utils.minifyString(`${className} flex`)}
      {...htmlUListProps}
    />
  )
}

NavbarNav.Link = NavbarNavLink
NavbarNav.ThemeChanger = NavbarNavThemeChanger

export default NavbarNav
