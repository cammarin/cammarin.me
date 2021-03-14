import NavbarBrand from '@/components/NavbarBrand'
import NavbarNav from '@/components/NavbarNav'

type NavbarProps = {
  children?: React.ReactNode
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="flex justify-between" aria-label="Main navigation">
      {children}
    </nav>
  )
}

Navbar.Brand = NavbarBrand
Navbar.Nav = NavbarNav

export default Navbar
