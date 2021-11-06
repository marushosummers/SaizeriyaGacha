import Head from 'next/head'
import { Main } from '../components/main'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main/>

    <footer>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by{' '}
        🦊
      </a>
    </footer>

  </div>
)

export default Home
