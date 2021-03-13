type DisplayHeadingProps = JSX.IntrinsicElements['h1']

const DisplayHeading = ({
  className = '',
  ...htmlHeadingProps
}: DisplayHeadingProps) => {
  return (
    <h1
      className={`${className} mb-1 text-5xl font-bold tracking-tight sm:text-6xl`}
      {...htmlHeadingProps}
    />
  )
}

export default DisplayHeading
