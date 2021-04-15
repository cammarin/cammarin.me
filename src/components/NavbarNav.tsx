import NavbarNavLink from '@/components/NavbarNavLink'
import Utils from '@/lib/utils'

type NavbarNavProps = JSX.IntrinsicElements['ul']

const NavbarNav = ({ className = '', ...htmlUListProps }: NavbarNavProps) => {
  // TODO: refactor to Flex when `gap` is supported in Safari.
  return (
    <ul
      className={Utils.minifyString(`
        ${className}
        grid
        row-start-2
        col-span-2
        auto-cols-min
        grid-flow-col
        gap-x-0.5
        px-1.5
        py-1
        -mx-1.5
        border-neutral-40
        border-t
        border-b
        dark:border-neutral-600
        xs-plus:row-start-auto
        xs-plus:col-span-1
        xs-plus:p-0
        xs-plus:m-0
        xs-plus:border-0
        xs-plus:dark:border-0
      `)}
      {...htmlUListProps}
    />
  )
}

NavbarNav.Link = NavbarNavLink

export default NavbarNav
