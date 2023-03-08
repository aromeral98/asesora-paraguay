import React, { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import CoverImage from './CoverImage'
import ContactButton from './ContactButton'


type Props = {
    children: ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
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
        
      const verifyVisibility = (entry: any )=> {
        const contactButton = document.getElementById('contactButton')
        if (entry[0].isIntersecting) {
          contactButton?.classList.add('hidden')
        } else if(!entry[0].isIntersecting) {
          contactButton?.classList.remove('hidden')
        }
      }

      useEffect(() => {
        if (typeof window !== "undefined") {
          window?.addEventListener('scroll', reveal)
          const form: any = document.getElementById('form')
          window?.addEventListener('touchend', ()=>{
            const observer = new IntersectionObserver(verifyVisibility,{threshold: 0.4})
            if(form !== null){
              observer.observe(form)
            }
          })
        }
      }, [window.location.pathname])

    return (
        <>
            <Navbar />
            {(((window.location.pathname || '/') !== '/') && ((window.location.pathname || '/') !== '/contact')) && <ContactButton />}
            {(window.location.pathname || '/') !== '/' && <CoverImage />}
            <main className='flex flex-grow flex-col mx-auto contactPattern overflow-hidden'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout