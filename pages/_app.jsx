import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga4'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: "G-M6PYSY246X",
      },
    ]);
    
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "click", page: pathname });
  }, [pathname]);

  return <Component {...pageProps} />
}

export default MyApp
