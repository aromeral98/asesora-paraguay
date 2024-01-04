import '../styles/globals.css'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { I18nextProvider } from 'react-i18next'
import globalEn from '../lang/en/global.json'
import globalEs from '../lang/es/global.json'
import i18next from 'i18next'
import Script from 'next/script'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Layout from '../components/shared/Layout'

function MyApp({ Component, pageProps }) {
  let lang = ''
  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem('lang') === null) {
      window.localStorage.setItem('lang', 'en-EN')
      lang = 'en-EN'
    } else {
      lang = window.localStorage.getItem('lang')
    }
  }

  i18next.init({
    interpolation: { escapeValue: false },
    lng: lang || 'en-EN',
    resources: {
      es: {
        global: globalEs
      },
      en: {
        global: globalEn
      }
    }
  })
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: "G-M6PYSY246X",
      },
    ]);
  }, []);

  return <I18nextProvider i18n={i18next}>
    <Layout>
    <SpeedInsights />
    <Component {...pageProps} />
    </Layout>
  </I18nextProvider>
}

export default MyApp
