import AboutContent from '../components/aboutContent'
import { _Head } from '../components/head'

const About = (): JSX.Element => (
  <>
    <_Head
      title={'サイゼリヤ1000円ガチャ'}
      description={'サイゼリヤのメニューをガチャしよう！'}
      keyword={'サイゼリヤ,1000円,ガチャ'}
      url={process.env.NEXT_PUBLIC_BASE_URL}
      noindex={true}
    />
    <AboutContent />
  </>
)

export default About
