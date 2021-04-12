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
          Hi, I’m <GradientText>Carlos Marin</GradientText>
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
            className="inline-block text-lg"
            textContent="More about me →"
          >
            More about me <span aria-hidden="true">→</span>
          </GradientLink>
        </span>
      </p>

      <p className="mb-10 sm-base:mb-12">
        My goal is to make information accessible to everyone and I write about
        it in data visualization.{' '}
        <span className="block">
          <GradientLink
            href="/articles"
            className="inline-block text-lg"
            textContent="Accessible dataviz →"
          >
            Accessible dataviz <span aria-hidden="true">→</span>
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
          Estadão
        </a>
        .{' '}
        <span className="block">
          <GradientLink
            href="/projects"
            className="inline-block text-lg"
            textContent="Check our works →"
          >
            Check our works <span aria-hidden="true">→</span>
          </GradientLink>
        </span>
      </p>
    </Layout>
  )
}

export default Home
