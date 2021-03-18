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
          z-10
          inline-block
          p-2.5
          text-base
          font-medium
          leading-5
          text-current
          no-underline
          rounded
          hover:text-current
          focus-visible:text-current
          dark:text-current
          dark:hover:text-current
          dark:focus-visible:text-current
          xs-base:text-lg
          xs-base:leading-5
          sm-base:p-3
          sm-base:text-xl
          sm-base:leading-6
        `)}
        {...htmlAnchorProps}
      />
    </Link>
  )
}

export default NavbarBrand
