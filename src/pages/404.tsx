import DisplayHeading from '@/components/DisplayHeading'
import GradientLink from '@/components/GradientLink'
import GradientText from '@/components/GradientText'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import SubHeading from '@/components/SubHeading'

const Http404 = () => {
  return (
    <Layout title="Page not found" description="Resource not found.">
      <Intro>
        <DisplayHeading>
          <GradientText>404</GradientText>
        </DisplayHeading>

        <SubHeading>Not found</SubHeading>
      </Intro>

      <p className="mb-10 sm-base:mb-12">
        The resource you are looking for has not been found or probably no
        longer exists at this place.{' '}
        <span className="block">
          <GradientLink
            href="/"
            className="inline-block text-lg"
            textContent="Back to home →"
          >
            Back to home <span aria-hidden="true">→</span>
          </GradientLink>
        </span>
      </p>
    </Layout>
  )
}

export default Http404
