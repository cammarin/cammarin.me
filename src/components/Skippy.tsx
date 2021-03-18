import Utils from '@/lib/utils'

type SkippyProps = JSX.IntrinsicElements['a']

const Skippy = ({ children, ...htmlAnchorProps }: SkippyProps) => {
  return (
    <a
      className="block no-underline sr-only focus:ring-0 focus:ring-offset-0 focus:not-sr-only"
      {...htmlAnchorProps}
    >
      <span
        className={Utils.minifyString(`
          relative
          block
          p-2.5
          font-semibold
          text-neutral-10
          text-center
          glow-md
          gradient-from-cyan-to-deep-purple
          dark:text-neutral-900
          dark:filter-grayscale-25
          dark:gradient-from-orange-to-pink
          xs-base:px-5
          sm-mini:px-6
          sm-base:px-8
          sm-base:py-3
        `)}
      >
        {children}
      </span>
    </a>
  )
}

export default Skippy
