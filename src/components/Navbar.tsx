import NavbarBrand from '@/components/NavbarBrand'
import NavbarNav from '@/components/NavbarNav'

type NavbarProps = {
  children?: React.ReactNode
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <header>
      <nav aria-label="Main navigation">{children}</nav>
    </header>
  )
}

Navbar.Brand = NavbarBrand
Navbar.Nav = NavbarNav

export default Navbar
