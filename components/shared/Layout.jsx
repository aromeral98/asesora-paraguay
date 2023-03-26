import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import CoverImage from './CoverImage'
import ContactButton from './ContactButton'
import ReactGA from 'react-ga4'

import { FloatingWhatsApp } from 'react-floating-whatsapp'



const Layout = ({ children }) => {


  return (
    <>
      <Navbar />
      <FloatingWhatsApp onClick={()=> ReactGA.event({
        category: "click",
        action: `Click Whatsapp Popup`,
        label: "Click Whatsapp Popup",
      })} phoneNumber='+5950972999583' allowEsc allowClickAway accountName='Asesora Paraguay' avatar={'http://asesoraparaguay.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5c0b33cf.PNG&w=64&q=75'} />
      {typeof window !== "undefined" && window.location.pathname !== '/' && window.location.pathname !== '/contact' && !window.location.pathname.includes('article')
        ? <ContactButton />
        : null}
      {typeof window !== "undefined" && window.location.pathname !== '/' && !window.location.pathname.includes('article')
        ? <CoverImage />
        : null}
      <main className='flex flex-grow flex-col mx-auto contactPattern overflow-hidden min-h-screen'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout