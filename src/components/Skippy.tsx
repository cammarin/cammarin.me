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
          bg-gradient-to-br
          from-green-400
          to-blue-500
          glow-md
          dark:text-neutral-900
          dark:from-yellow-400
          dark:to-pink-500
          dark:filter-grayscale-30
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
