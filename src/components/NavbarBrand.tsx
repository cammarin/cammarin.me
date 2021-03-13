import Link from 'next/link'

// Omit `href` because it's hard-coded.
type NavbarBrandProps = Omit<JSX.IntrinsicElements['a'], 'href'>

const NavbarBrand = ({
  className = '',
  ...htmlAnchorProps
}: NavbarBrandProps) => {
  return (
    <Link href="/">
      <a
        className={`
          ${className}
          inline-block
          p-3
          text-xl
          font-medium
          leading-6
          rounded
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-neutral-400
          focus-visible:ring-offset-1
          focus-visible:ring-offset-neutral-10
          dark:focus-visible:ring-neutral-80
          dark:focus-visible:ring-offset-neutral-900
        `}
        {...htmlAnchorProps}
      />
    </Link>
  )
}

export default NavbarBrand
