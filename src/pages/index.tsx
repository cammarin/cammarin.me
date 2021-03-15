import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const Home = () => {
  return (
    <Layout description="Homepage">
      <Intro>
        <DisplayHeading>
          Hi, I’m{' '}
          <GradientText className="glow glow-40 dark:glow-60">
            Carlos Marin
          </GradientText>
        </DisplayHeading>

        <SubHeading>Lead Information Designer + Developer @ Estadão</SubHeading>
      </Intro>
    </Layout>
  )
}

export default Home
