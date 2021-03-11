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
        <GradientText>Works</GradientText>
      </DisplayHeading>

      <SubHeading>A curated list of projects</SubHeading>
    </Layout>
  )
}

export default Works
