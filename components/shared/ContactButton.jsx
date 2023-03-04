import { useEffect } from 'react';
import ReactGA from 'react-ga'

export default function ContactButton() {
  useEffect(() => {
    ReactGA.initialize('G-M6PYSY246X');
  }, []);
  
  return (
    <a onClick={()=> ReactGA.event({
      category: 'Click en contacto',
      action: `Click en contacto desde ${window.navigator.geolocation}`,
    })} id="contactButton" href="#form" className="fixed lg:hidden -right-10 top-64 z-40 bg-primaryColor p-2 px-6 border-2 border-b-0 font-bold text-white border-white transform -rotate-90">
        Contactar
    </a>
  )
}
