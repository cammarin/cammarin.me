import NavbarBrand from '@/components/NavbarBrand'
import NavbarNav from '@/components/NavbarNav'

type NavbarProps = {
  children?: React.ReactNode
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <header className="py-4">
      <nav className="flex justify-between" aria-label="Main navigation">
        {children}
      </nav>
    </header>
  )
}

Navbar.Brand = NavbarBrand
Navbar.Nav = NavbarNav

export default Navbar
