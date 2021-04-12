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
        mb-0
        text-7xl
        font-bold
        sm-base:text-8xl
      `)}
      {...htmlHeadingProps}
    />
  )
}

export default DisplayHeading
