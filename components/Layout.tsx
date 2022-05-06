import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
    children: ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='flex flex-grow flex-col mx-auto'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout