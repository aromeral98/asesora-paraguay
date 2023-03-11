import { useEffect } from 'react';
import ReactGA from 'react-ga4'
import { useTranslation } from 'react-i18next';

export default function ContactButton() {
  const { t } = useTranslation('global')
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: "G-M6PYSY246X",
      },
    ]);
  }, []);

  return (
    <a onClick={() =>
      ReactGA.event({
        category: "click",
        action: `Click en contacto`,
        label: "your label", // optional
      })} id="contactButton" href="#form" className="fixed lg:hidden -right-10 top-64 z-40 bg-primaryColor p-2 px-6 border-2 border-b-0 font-bold text-white border-white transform -rotate-90">
      {t('contact.form.contact')}
    </a>
  )
}
