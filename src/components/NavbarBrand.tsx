import Link from 'next/link'
import Utils from '@/lib/utils'

// Omit `href` because it's hard-coded.
type NavbarBrandProps = Omit<JSX.IntrinsicElements['a'], 'href'>

const NavbarBrand = ({
  className = '',
  ...htmlAnchorProps
}: NavbarBrandProps) => {
  return (
    <Link href="/">
      <a
        className={Utils.minifyString(`
          ${className}
          inline-block
          p-3
          text-xl
          font-medium
          leading-6
          text-current
          no-underline
          rounded
          hover:text-current
          focus-visible:text-current
          dark:text-current
          dark:hover:text-current
          dark:focus-visible:text-current
        `)}
        {...htmlAnchorProps}
      />
    </Link>
  )
}

export default NavbarBrand
