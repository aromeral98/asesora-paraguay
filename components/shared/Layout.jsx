import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import CoverImage from './CoverImage'
import ContactButton from './ContactButton'
import ReactGA from 'react-ga4'


const Layout = ({ children }) => {
  const routesAvailable = ['/en/move-to-paraguay-as-a-freelancer','/en/services', '/en/residency','/en/contact' ]
  const pathName= typeof window !== "undefined" && window.location.pathname
  return (
    <>
      <Navbar />
      {typeof window !== "undefined" && routesAvailable.find(route => route === pathName) && pathName !== 'en/contact'
        ? <ContactButton />
        : null}
      {typeof window !== "undefined" && routesAvailable.find(route => route === pathName) && !pathName.includes('blog')
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