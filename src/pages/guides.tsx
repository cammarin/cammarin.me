import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const Guides = () => {
  return (
    <Layout
      title="Guides"
      description="Thoughts and tips about accessibility in data visualization."
    >
      <DisplayHeading>
        <GradientText className="glow glow-30 dark:glow-60">
          Guides
        </GradientText>
      </DisplayHeading>

      <SubHeading>Make information accessible</SubHeading>
    </Layout>
  )
}

export default Guides
