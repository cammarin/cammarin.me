import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const Works = () => {
  return (
    <Layout
      title="Works"
      description="A list of projects I was responsible or part of."
    >
      <DisplayHeading>
        <GradientText className="glow glow-30 dark:glow-60">Works</GradientText>
      </DisplayHeading>

      <SubHeading>A curated list of projects</SubHeading>
    </Layout>
  )
}

export default Works
