type DisplayHeadingProps = JSX.IntrinsicElements['h1']

const DisplayHeading = ({
  className = '',
  ...htmlHeadingProps
}: DisplayHeadingProps) => {
  return (
    <h1
      className={`${className} mb-1 text-5xl sm:text-6xl font-bold tracking-tight`}
      {...htmlHeadingProps}
    />
  )
}

export default DisplayHeading
