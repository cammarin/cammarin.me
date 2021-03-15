import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const Guides = () => {
  return (
    <Layout
      title="Guides"
      description="Thoughts and tips about accessibility in data visualization."
    >
      <Intro>
        <DisplayHeading>
          <GradientText className="glow glow-opacity-40 dark:glow-opacity-60">
            Guides
          </GradientText>
        </DisplayHeading>

        <SubHeading>Make information accessible</SubHeading>
      </Intro>
    </Layout>
  )
}

export default Guides
