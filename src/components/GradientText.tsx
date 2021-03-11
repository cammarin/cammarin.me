type GradientTextProps = JSX.IntrinsicElements['span']

const GradientText = ({
  className = '',
  ...htmlSpanProps
}: GradientTextProps) => {
  return (
    <span
      className={`${className} relative inline-block text-transparent bg-gradient-to-br from-green-400 to-blue-500 bg-clip-text dark:from-yellow-400 dark:to-pink-500 dark:filter-desaturate`}
      {...htmlSpanProps}
    />
  )
}

export default GradientText
