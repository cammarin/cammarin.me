import Utils from '@/lib/utils'

type SubHeadingProps = JSX.IntrinsicElements['p']

const SubHeading = ({
  className = '',
  ...htmlParagraphProps
}: SubHeadingProps) => {
  return (
    <p
      className={Utils.minifyString(`
        ${className}
        text-xl
        text-neutral-200
        dark:text-neutral-80
        sm-base:text-2xl
      `)}
      {...htmlParagraphProps}
    />
  )
}

export default SubHeading
