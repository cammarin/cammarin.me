import NavbarBrand from '@/components/NavbarBrand'
import NavbarNav from '@/components/NavbarNav'
import NavbarThemeChanger from '@/components/NavbarThemeChanger'
import Utils from '@/lib/utils'

type NavbarProps = JSX.IntrinsicElements['nav']

const Navbar = ({ className = '', ...htmlNavProps }: NavbarProps) => {
  return (
    <nav
      className={Utils.minifyString(`
        ${className}
        xs-plus:flex
        xs-plus:justify-between
      `)}
      {...htmlNavProps}
    />
  )
}

Navbar.Brand = NavbarBrand
Navbar.Nav = NavbarNav
Navbar.ThemeChanger = NavbarThemeChanger

export default Navbar
