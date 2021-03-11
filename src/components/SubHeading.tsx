type SubHeadingProps = JSX.IntrinsicElements['p']

const SubHeading = ({
  className = '',
  ...htmlParagraphProps
}: SubHeadingProps) => {
  return (
    <p
      className={`${className} mb-20 text-xl sm:text-2xl lowercase tracking-tight`}
      {...htmlParagraphProps}
    />
  )
}

export default SubHeading
