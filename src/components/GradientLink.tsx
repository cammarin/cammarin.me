import Link from 'next/link'
import GradientText from '@/components/GradientText'
import Utils from '@/lib/utils'

type GradientLinkProps = JSX.IntrinsicElements['a'] & {
  external?: boolean
  textContent?: string | ''
}

const GradientLink = ({
  className = '',
  children,
  external = false,
  href = '/',
  textContent = '',
  ...htmlAnchorProps
}: GradientLinkProps) => {
  return (
    <>
      {external ? (
        <a
          href={href}
          className={Utils.minifyString(`
            ${className}
            group
            mt-1
            font-medium
          `)}
          target="_blank"
          rel="noopener noreferrer"
          {...htmlAnchorProps}
        >
          <GradientText
            className={Utils.minifyString(`
              glow
              glow-opacity-25
              group-hover:glow-md
              group-hover:glow-opacity-60
              group-focus-visible:glow-md
              group-focus-visible:glow-opacity-60
              dark:glow-opacity-40
              dark:group-hover:glow-opacity-100
              dark:group-focus-visible:glow-opacity-100
            `)}
            data-content={textContent}
          >
            {children}
          </GradientText>
        </a>
      ) : (
        <Link href={href}>
          <a
            className={Utils.minifyString(`
              ${className}
              group
              mt-1
              font-medium
            `)}
            {...htmlAnchorProps}
          >
            <GradientText
              className={Utils.minifyString(`
                glow
                glow-opacity-25
                group-hover:glow-md
                group-hover:glow-opacity-60
                group-focus-visible:glow-md
                group-focus-visible:glow-opacity-60
                dark:glow-opacity-30
                dark:group-hover:glow-opacity-100
                dark:group-focus-visible:glow-opacity-100
              `)}
              data-content={textContent}
            >
              {children}
            </GradientText>
          </a>
        </Link>
      )}
    </>
  )
}

export default GradientLink
