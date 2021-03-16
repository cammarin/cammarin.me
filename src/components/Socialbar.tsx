import SocialbarNav from '@/components/SocialbarNav'
import Utils from '@/lib/utils'

type SocialbarProps = JSX.IntrinsicElements['div']

const Socialbar = ({ className = '', ...htmlNavProps }: SocialbarProps) => {
  return (
    <div
      className={Utils.minifyString(`
        ${className}
        flex
      `)}
      {...htmlNavProps}
    />
  )
}

Socialbar.Nav = SocialbarNav

export default Socialbar
