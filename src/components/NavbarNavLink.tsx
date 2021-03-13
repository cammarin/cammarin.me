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
          className={`
            ${className}
            inline-block
            p-3
            w-20
            font-medium
            text-center
            rounded
            hover:text-neutral-800
            hover:bg-neutral-20
            focus-visible:text-neutral-800
            focus-visible:bg-neutral-20
            dark:hover:text-neutral-10
            dark:hover:bg-neutral-700
            dark:focus-visible:text-neutral-10
            dark:focus-visible:bg-neutral-700
          `}
          {...htmlAnchorProps}
        />
      </Link>
    </li>
  )
}

export default NavbarNavLink
