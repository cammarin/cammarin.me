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

        <SubHeading>
          Lead Information{' '}
          <span className="break-words">Designer+Developer</span> at Estadão{' '}
          <span className="sr-only xs-plus:not-sr-only sm-base:sr-only">
            newsroom
          </span>
        </SubHeading>
      </Intro>

      <p className="mb-10 sm-base:mb-12">
        I’m a former aspiring scientist who found his vocation in Information
        Design and programming.{' '}
        <span className="block">
          <GradientLink
            href="/about"
            className="inline-block text-lg whitespace-nowrap"
          >
            More about me →
          </GradientLink>
        </span>
      </p>

      <p className="mb-10 sm-base:mb-12">
        My goal is to make information accessible to everyone and I write about
        it in data visualization.{' '}
        <span className="block">
          <GradientLink
            href="/guides"
            className="inline-block text-lg whitespace-nowrap"
          >
            Accessible dataviz →
          </GradientLink>
        </span>
      </p>

      <p>
        I lead a team of journalists, designers, and developers at the Graphic
        Department of{' '}
        <a
          href="https://estadao.com.br"
          hrefLang="pt-BR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-medium">Estadão</span>
        </a>
        .{' '}
        <span className="block">
          <GradientLink
            href="/works"
            className="inline-block text-lg whitespace-nowrap"
          >
            Check our works →
          </GradientLink>
        </span>
      </p>
    </Layout>
  )
}

export default Home
