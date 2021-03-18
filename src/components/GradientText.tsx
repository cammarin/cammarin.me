import Utils from '@/lib/utils'

type GradientTextProps = JSX.IntrinsicElements['span']

const GradientText = ({
  className = '',
  children,
  ...htmlSpanProps
}: GradientTextProps) => {
  // The `data-content` attribute is necessary for glow effect.
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
      data-content={children}
    >
      {children}
    </span>
  )
}

export default GradientText
