import Utils from '@/lib/utils'

type DisplayHeadingProps = JSX.IntrinsicElements['h1']

const DisplayHeading = ({
  className = '',
  ...htmlHeadingProps
}: DisplayHeadingProps) => {
  return (
    <h1
      className={Utils.minifyString(`
        ${className}
        mb-0.5
        text-5xl
        font-bold
        tracking-tighter
        sm-base:mb-1
        sm-base:text-6xl
      `)}
      {...htmlHeadingProps}
    />
  )
}

export default DisplayHeading
