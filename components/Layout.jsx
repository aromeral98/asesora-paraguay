import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='flex flex-grow flex-col'>
            {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout