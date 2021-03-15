import NavbarBrand from '@/components/NavbarBrand'
import NavbarNav from '@/components/NavbarNav'
import Utils from '@/lib/utils'

type NavbarProps = JSX.IntrinsicElements['nav']

const Navbar = ({ className = '', ...htmlNavProps }: NavbarProps) => {
  return (
    <nav
      className={Utils.minifyString(`
        ${className}
        flex
        justify-between
      `)}
      {...htmlNavProps}
    />
  )
}

Navbar.Brand = NavbarBrand
Navbar.Nav = NavbarNav

export default Navbar
