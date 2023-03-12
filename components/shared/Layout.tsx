import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import CoverImage from './CoverImage'
import ContactButton from './ContactButton'


type Props = {
  children: ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {


  return (
    <>
      <Navbar />
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