import { _Head } from '../components/head'
import { Main } from '../components/main'

const Home = (): JSX.Element => (
  <>
    <_Head
      title={'サイゼリヤ1000円ガチャ'}
      description={'サイゼリヤのメニューをガチャガチャしよう！'}
      keyword={'サイゼリヤ,1000円,ガチャ'}
      url={process.env.baseUrl}
    />
    <Main/>
  </>
)

export default Home
