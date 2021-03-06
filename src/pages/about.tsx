import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const About = () => {
  return (
    <Layout
      title="About"
      description="More about the designer and developer Carlos Marin."
    >
      <Intro>
        <DisplayHeading>
          <GradientText>About</GradientText>
        </DisplayHeading>

        <SubHeading>Education, jobs & interests</SubHeading>
      </Intro>
    </Layout>
  )
}

export default About
