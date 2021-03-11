import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const Home = () => {
  return (
    <Layout description="Homepage">
      <DisplayHeading>
        Hi, I’m <GradientText>Carlos Marin</GradientText>
      </DisplayHeading>

      <SubHeading>Lead Information Designer + Developer @ Estadão</SubHeading>
    </Layout>
  )
}

export default Home
