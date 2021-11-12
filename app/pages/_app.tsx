import "../styles/global.css";
import { AppProps } from 'next/app'
import { GoogleAnalytics } from "../lib/gtag";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
)}

export default MyApp
