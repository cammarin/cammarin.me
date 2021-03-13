type SkippyProps = JSX.IntrinsicElements['a']

const Skippy = ({
  className = '',
  children,
  ...htmlAnchorProps
}: SkippyProps) => {
  return (
    <a
      className={`${className} block font-semibold text-light-mode-white text-center bg-gradient-to-br from-green-400 to-blue-500 sr-only focus:outline-none focus:not-sr-only dark:text-dark-mode-black dark:from-yellow-400 dark:to-pink-500 dark:filter-desaturate-30`}
      {...htmlAnchorProps}
    >
      <span className="block py-5 mb-14">{children}</span>
    </a>
  )
}

export default Skippy
