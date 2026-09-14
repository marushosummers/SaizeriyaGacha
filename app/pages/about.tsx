import AboutContent from '../components/aboutContent'
import { _Head } from '../components/head'
import { SITE_NAME } from '../lib/seo'

const About = (): JSX.Element => (
  <>
    <_Head
      title={`このサイトについて | ${SITE_NAME}`}
      description={`${SITE_NAME}の概要、メニュー情報の出典、免責事項、Cookieの利用についてご案内します。`}
      path="/about/"
    />
    <AboutContent />
  </>
)

export default About
