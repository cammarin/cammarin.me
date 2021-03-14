type SkippyProps = JSX.IntrinsicElements['a']

const Skippy = ({ children, ...htmlAnchorProps }: SkippyProps) => {
  return (
    <a
      className="block no-underline sr-only focus:ring-0 focus:ring-offset-0 focus:not-sr-only"
      {...htmlAnchorProps}
    >
      <span
        className={`
        relative
        block
        p-3
        font-semibold
        text-neutral-10
        text-center
        bg-gradient-to-br
        from-green-400
        to-blue-500
        glow-md
        glow-100
        dark:text-neutral-900
        dark:from-yellow-400
        dark:to-pink-500
        dark:filter-desaturate-30
      `}
      >
        {children}
      </span>
    </a>
  )
}

export default Skippy
