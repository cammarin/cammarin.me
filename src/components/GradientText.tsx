import Utils from '@/lib/utils'

type GradientTextProps = JSX.IntrinsicElements['span']

const GradientText = ({
  className = '',
  children,
  ...htmlSpanProps
}: GradientTextProps) => {
  return (
    <span
      className={Utils.minifyString(`
        ${className}
        relative
        inline-block
        text-transparent
        bg-clip-text
        gradient-light
        dark:filter-grayscale-20
        dark:gradient-dark
      `)}
      {...htmlSpanProps}
    >
      {children}
    </span>
  )
}

export default GradientText
