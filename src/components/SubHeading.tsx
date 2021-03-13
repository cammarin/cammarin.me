type SubHeadingProps = JSX.IntrinsicElements['p']

const SubHeading = ({
  className = '',
  ...htmlParagraphProps
}: SubHeadingProps) => {
  return (
    <p
      className={`${className} mb-20 text-xl sm:text-2xl text-neutral-400 lowercase tracking-tight dark:text-neutral-80`}
      {...htmlParagraphProps}
    />
  )
}

export default SubHeading
