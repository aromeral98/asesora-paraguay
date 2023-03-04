import { useEffect } from 'react';
import ReactGA from 'react-ga4'

export default function ContactButton() {
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: "G-M6PYSY246X",
      },
    ]);
    ReactGA.event({
      category: "your category",
      action: "your action",
      label: "your label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  }, []);
  
  return (
    <a onClick={()=>
      ReactGA.event({
        category: "click",
        action: `Click en contacto desde ${window.navigator.geolocation}`,
        label: "your label", // optional
      })} id="contactButton" href="#form" className="fixed lg:hidden -right-10 top-64 z-40 bg-primaryColor p-2 px-6 border-2 border-b-0 font-bold text-white border-white transform -rotate-90">
        Contactar
    </a>
  )
}
