import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const About = () => {
  return (
    <Layout
      title="About"
      description="More about the designer and developer Carlos Marin."
    >
      <DisplayHeading>
        <GradientText className="glow glow-30 dark:glow-60">About</GradientText>
      </DisplayHeading>

      <SubHeading>Education, jobs & interests</SubHeading>
    </Layout>
  )
}

export default About
