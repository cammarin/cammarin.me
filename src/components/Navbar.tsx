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
        grid
        grid-rows-[min-content,min-content]
        grid-cols-[min-content,1fr]
        gap-x-0.5
        gap-y-1.5
        xs-plus:grid-rows-none
        xs-plus:grid-cols-[min-content,1fr,min-content]
        xs-plus:justify-items-end
      `)}
      {...htmlNavProps}
    />
  )
}

Navbar.Brand = NavbarBrand
Navbar.Nav = NavbarNav
Navbar.ThemeChanger = NavbarThemeChanger

export default Navbar
