import NavbarNavLink from '@/components/NavbarNavLink'
import Utils from '@/lib/utils'

type NavbarNavProps = JSX.IntrinsicElements['ul']

const NavbarNav = ({ className = '', ...htmlUListProps }: NavbarNavProps) => {
  // TODO: refactor to Flex when `gap` is supported in Safari.
  return (
    <ul
      className={Utils.minifyString(
        `${className} grid auto-cols-min grid-flow-col gap-0.5`
      )}
      {...htmlUListProps}
    />
  )
}

NavbarNav.Link = NavbarNavLink

export default NavbarNav
