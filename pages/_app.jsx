import '../styles/globals.css'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { I18nextProvider } from 'react-i18next'
import globalEn from '../lang/en/global.json'
import globalEs from '../lang/es/global.json'
import i18next from 'i18next'

function MyApp({ Component, pageProps }) {
  let lang = ''
  if(typeof window !== 'undefined'){
    if (window.localStorage.getItem('lang') === null) {
      window.localStorage.setItem('lang', window.navigator.language)
      lang = window.navigator.language
    } else {
      lang = window.localStorage.getItem('lang')
    }
  }
  
  i18next.init({
    interpolation: { escapeValue: false },
    lng: lang,
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
    <Component {...pageProps} />
  </I18nextProvider>
}

export default MyApp
