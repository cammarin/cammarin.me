import { Children } from 'react'
import NavbarNavLink from '@/components/NavbarNavLink'
import NavbarNavThemeChanger from '@/components/NavbarNavThemeChanger'
import Utils from '@/lib/utils'

type NavbarNavProps = JSX.IntrinsicElements['ul']

const NavbarNav = ({ className = '', ...htmlUListProps }: NavbarNavProps) => {
  const numberOfItems = Children.count(htmlUListProps.children)

  return (
    <ul
      className={Utils.minifyString(
        `${className} grid grid-flow-col gap-0.5 justify-items-end`
      )}
      style={{
        gridTemplateColumns: `repeat(${numberOfItems - 1}, min-content) 1fr`,
      }}
      {...htmlUListProps}
    />
  )
}

NavbarNav.Link = NavbarNavLink
NavbarNav.ThemeChanger = NavbarNavThemeChanger

export default NavbarNav
