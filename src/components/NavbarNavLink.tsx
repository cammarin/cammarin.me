import Link from 'next/link'

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
          className={`${className} inline-block p-3 w-20 font-medium text-center rounded hover:bg-neutral-20 dark:hover:bg-neutral-700`}
          {...htmlAnchorProps}
        />
      </Link>
    </li>
  )
}

export default NavbarNavLink
