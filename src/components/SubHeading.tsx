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
        mb-20
        text-xl
        text-neutral-400
        lowercase
        tracking-tight
        dark:text-neutral-60
        sm:text-2xl
      `)}
      {...htmlParagraphProps}
    />
  )
}

export default SubHeading
