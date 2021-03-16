import SocialbarNavLink from '@/components/SocialbarNavLink'
import Utils from '@/lib/utils'

type SocialbarNavProps = JSX.IntrinsicElements['ul']

const SocialbarNav = ({
  className = '',
  ...htmlUListProps
}: SocialbarNavProps) => {
  return (
    <ul
      className={Utils.minifyString(`${className} flex`)}
      {...htmlUListProps}
    />
  )
}

SocialbarNav.Link = SocialbarNavLink

export default SocialbarNav
