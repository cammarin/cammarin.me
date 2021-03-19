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
        gradient-from-cyan-to-deep-purple
        dark:filter-grayscale-25
        dark:gradient-from-orange-to-pink
      `)}
      {...htmlSpanProps}
    >
      {children}
    </span>
  )
}

export default GradientText
