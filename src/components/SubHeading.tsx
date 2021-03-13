type SubHeadingProps = JSX.IntrinsicElements['p']

const SubHeading = ({
  className = '',
  ...htmlParagraphProps
}: SubHeadingProps) => {
  return (
    <p
      className={`${className} mb-20 text-xl text-neutral-400 lowercase tracking-tight dark:text-neutral-80 sm:text-2xl`}
      {...htmlParagraphProps}
    />
  )
}

export default SubHeading
