import Link from 'next/link'
import Utils from '@/lib/utils'

type NavbarNavLinkProps = JSX.IntrinsicElements['a']

const NavbarNavLink = ({
  className = '',
  href = '/',
  ...htmlAnchorProps
}: NavbarNavLinkProps) => {
  return (
    <li className="mr-0.5">
      <Link href={href}>
        <a
          className={Utils.minifyString(`
            ${className}
            block
            w-14
            py-2.5
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
            xs-plus:w-16
            sm-base:w-20
            sm-base:py-3
          `)}
          {...htmlAnchorProps}
        />
      </Link>
    </li>
  )
}

export default NavbarNavLink
