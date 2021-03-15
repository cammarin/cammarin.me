import DisplayHeading from '@/components/DisplayHeading'
import GradientLink from '@/components/GradientLink'
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
          <GradientText className="glow glow-opacity-40 dark:glow-opacity-60">
            Carlos Marin
          </GradientText>
        </DisplayHeading>

        <SubHeading>Lead Information Designer + Developer @ Estadão</SubHeading>
      </Intro>

      <p className="mb-10 sm-base:mb-12">
        I’m a former aspiring scientist who found his vocation in Information
        Design and programming.{' '}
        <GradientLink href="/about">More about me →</GradientLink>
      </p>

      <p className="mb-10 sm-base:mb-12">
        My goal is to make information accessible to everyone and I write about
        it in data visualization.{' '}
        <GradientLink href="/guides">Accessible dataviz →</GradientLink>
      </p>

      <p>
        I lead a team of journalists, designers, and developers at the Graphic
        Department of{' '}
        <a
          href="https://estadao.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-medium">Estadão</span>
        </a>
        . <GradientLink href="/works">Check our works →</GradientLink>
      </p>
    </Layout>
  )
}

export default Home
