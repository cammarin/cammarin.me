import Utils from '@/lib/utils'

type IntroProps = JSX.IntrinsicElements['header']

const Intro = ({ className = '', ...htmlHeaderProps }: IntroProps) => {
  return (
    <header
      className={Utils.minifyString(`
        ${className}
        mb-16
        sm-base:mb-20
      `)}
      {...htmlHeaderProps}
    />
  )
}

export default Intro
