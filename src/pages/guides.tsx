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
          <GradientText className="glow-lg glow-opacity-25 dark:glow-opacity-30">
            Guides
          </GradientText>
        </DisplayHeading>

        <SubHeading>Make information accessible</SubHeading>
      </Intro>
    </Layout>
  )
}

export default Guides
