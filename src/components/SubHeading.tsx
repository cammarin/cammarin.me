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
        text-neutral-400
        tracking-tight
        dark:text-neutral-60
        sm-base:text-2xl
        sm-base:tracking-tighter
      `)}
      {...htmlParagraphProps}
    />
  )
}

export default SubHeading
