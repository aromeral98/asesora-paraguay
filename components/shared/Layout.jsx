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
      })} phoneNumber='+34618408582' allowEsc allowClickAway accountName='Asesora Paraguay' avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1920px-Flag_of_Paraguay.svg.png'} />
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