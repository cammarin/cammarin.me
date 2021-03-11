type SkippyProps = JSX.IntrinsicElements['a']

const Skippy = ({
  className = '',
  children,
  ...htmlAnchorProps
}: SkippyProps) => {
  return (
    <a
      className={`${className} block font-semibold text-center sr-only focus:not-sr-only`}
      {...htmlAnchorProps}
    >
      <span className="block py-5 mb-14">{children}</span>
    </a>
  )
}

export default Skippy
