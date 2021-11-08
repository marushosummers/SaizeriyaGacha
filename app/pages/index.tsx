import Head from 'next/head'
import { Main } from '../components/main'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>サイゼリヤ1000円ガチャ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main/>
  </div>
)

export default Home
