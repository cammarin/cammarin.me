type SkippyProps = JSX.IntrinsicElements['a']

const Skippy = ({ ...htmlAnchorProps }: SkippyProps) => {
  return <a {...htmlAnchorProps} />
}

export default Skippy
