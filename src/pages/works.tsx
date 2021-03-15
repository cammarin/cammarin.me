import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const Works = () => {
  return (
    <Layout
      title="Works"
      description="A list of projects I was responsible or part of."
    >
      <Intro>
        <DisplayHeading>
          <GradientText className="glow glow-opacity-40 dark:glow-opacity-60">
            Works
          </GradientText>
        </DisplayHeading>

        <SubHeading>A curated list of projects</SubHeading>
      </Intro>
    </Layout>
  )
}

export default Works
