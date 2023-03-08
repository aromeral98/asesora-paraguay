import '../styles/globals.css'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

function MyApp({ Component, pageProps }) {
 
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: "G-M6PYSY246X",
      },
    ]);

  }, []);

  // useEffect(() => {
  //   ReactGA.send({ hitType: "click", page: pathname });
  // }, [pathname]);

  return <Component {...pageProps} />
}

export default MyApp
