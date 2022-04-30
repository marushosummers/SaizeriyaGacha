import { AppProps } from 'next/app'
import { GoogleAnalytics } from '../lib/gtag'
import { GoogleAdsHeader } from '../lib/gadsense'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Kaisei Tokumin', serif, 'Hiragino Sans', sans-serif;
    background: #007c00;
  }

  h1,
  h2 {
    margin: 0;
  }

  a {
    color: rgba(0, 100, 0);
    text-decoration: underline;
  }
`

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <GoogleAnalytics />
      <GoogleAdsHeader />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
