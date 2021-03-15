import Link from 'next/link'
import DisplayHeading from '@/components/DisplayHeading'
import GradientText from '@/components/GradientText'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'
import Utils from '@/lib/utils'

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
        <Link href="/about">
          <a className="group mt-1 font-semibold whitespace-nowrap">
            <GradientText
              className={Utils.minifyString(`
                glow
                glow-opacity-25
                group-hover:glow-md
                group-hover:glow-opacity-60
                group-focus-visible:glow-md
                group-focus-visible:glow-opacity-60
                dark:glow-opacity-40
                dark:group-hover:glow-opacity-100
                dark:group-focus-visible:glow-opacity-100
              `)}
            >
              More about me →
            </GradientText>
          </a>
        </Link>
      </p>

      <p className="mb-10 sm-base:mb-12">
        My goal is to make information accessible to everyone and I write about
        it in data visualization.{' '}
        <Link href="/guides">
          <a className="group mt-1 font-semibold whitespace-nowrap">
            <GradientText
              className={Utils.minifyString(`
                glow
                glow-opacity-25
                group-hover:glow-md
                group-hover:glow-opacity-60
                group-focus-visible:glow-md
                group-focus-visible:glow-opacity-60
                dark:glow-opacity-40
                dark:group-hover:glow-opacity-100
                dark:group-focus-visible:glow-opacity-100
              `)}
            >
              Accessible dataviz →
            </GradientText>
          </a>
        </Link>
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
        .{' '}
        <Link href="/works">
          <a className="group mt-1 font-semibold whitespace-nowrap">
            <GradientText
              className={Utils.minifyString(`
                glow
                glow-opacity-25
                group-hover:glow-md
                group-hover:glow-opacity-60
                group-focus-visible:glow-md
                group-focus-visible:glow-opacity-60
                dark:glow-opacity-40
                dark:group-hover:glow-opacity-100
                dark:group-focus-visible:glow-opacity-100
              `)}
            >
              Check our works →
            </GradientText>
          </a>
        </Link>
      </p>
    </Layout>
  )
}

export default Home
