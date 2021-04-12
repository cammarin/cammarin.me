import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const Works = () => {
  return (
    <Layout
      title="Projects"
      description="A list of works I was responsible or part of and personal projects."
    >
      <Intro>
        <DisplayHeading>
          <GradientText
            className="glow-lg glow-opacity-25 dark:glow-opacity-30"
            data-content="Projects"
          >
            Projects
          </GradientText>
        </DisplayHeading>

        <SubHeading>A curated list of works</SubHeading>
      </Intro>
    </Layout>
  )
}

export default Works
