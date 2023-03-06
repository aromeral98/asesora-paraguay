import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga4'
import { Helmet } from 'react-helmet'

function MyApp({ Component, pageProps }) {
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

  return <Helmet>
    <meta property="og:title" content="Asesora Paraguay - Tramitación de residencias, nacionalidad y migración" />
    {/* <meta property="og:description" content="Somos un despacho que se dedica a la tramitación de residencias, nacionalidad y todo lo relacionado con el proceso de migración en Paraguay, enfocado principalmente a empresarios, inversores y nómadas digitales." /> */}
    <meta property="og:image" content={logo} />
    <meta property="og:url" content="URL de la página a compartir" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Asesora Paraguay - Tramitación de residencias, nacionalidad y migración" />
    <meta name="twitter:description" content="Somos un despacho que se dedica a la tramitación de residencias, nacionalidad y todo lo relacionado con el proceso de migración en Paraguay, enfocado principalmente a empresarios, inversores y nómadas digitales." />
    {/* <meta name="twitter:image" content={logo} /> */}
    <Component {...pageProps} />
  </Helmet>
}

export default MyApp
