import Link from 'next/link'
import Utils from '@/lib/utils'

type NavbarNavLinkProps = JSX.IntrinsicElements['a']

const NavbarNavLink = ({
  className = '',
  href = '/',
  ...htmlAnchorProps
}: NavbarNavLinkProps) => {
  return (
    <li>
      <Link href={href}>
        <a
          className={Utils.minifyString(`
            ${className}
            block
            p-2.5
            text-sm
            font-medium
            text-current
            text-center
            no-underline
            rounded
            hover:text-neutral-800
            hover:bg-neutral-20
            focus-visible:text-neutral-800
            focus-visible:bg-neutral-20
            dark:text-current
            dark:hover:text-neutral-10
            dark:hover:bg-neutral-700
            dark:focus-visible:text-neutral-10
            dark:focus-visible:bg-neutral-700
            sm-base:p-3
            sm-base:text-base
          `)}
          {...htmlAnchorProps}
        />
      </Link>
    </li>
  )
}

export default NavbarNavLink
