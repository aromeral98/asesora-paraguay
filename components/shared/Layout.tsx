import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import CoverImage from './CoverImage'
import ContactButton from './ContactButton'


type Props = {
    children: ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    function reveal () {
        const reveals = document.querySelectorAll('.reveal')
    
        for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight
          const elementTop = reveals[i].getBoundingClientRect().top
          const elementVisible = 0
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active')
          } else {
            reveals[i].classList.remove('active')
          }
        }
      }
      if (typeof window !== "undefined") {
        window?.addEventListener('scroll', reveal)
      }

    return (
        <>
            <Navbar />
            {router.route !== '/' && <ContactButton />}
            {router.route !== '/' && <CoverImage />}
            <main className='flex flex-grow flex-col mx-auto contactPattern'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout