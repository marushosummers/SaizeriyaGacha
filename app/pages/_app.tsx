import "../styles/global.css";
import { AppProps } from 'next/app'
import { GoogleAnalytics } from "../lib/gtag";
import { GoogleAdsHeader } from "../lib/gadsense";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GoogleAnalytics />
      <GoogleAdsHeader />
      <Component {...pageProps} />
    </>
)}

export default MyApp
