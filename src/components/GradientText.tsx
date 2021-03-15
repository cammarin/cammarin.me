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
        bg-gradient-to-br
        from-green-400
        to-indigo-500
        bg-clip-text
        dark:from-yellow-400
        dark:to-pink-500
        dark:filter-grayscale-30
      `)}
      {...htmlSpanProps}
      data-content={children}
    >
      {children}
    </span>
  )
}

export default GradientText
