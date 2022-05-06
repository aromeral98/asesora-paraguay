import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import CoverImage from './CoverImage'
import { useRouter } from 'next/router'

type Props = {
    children: ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    return (
        <>
            <Navbar />
            {router.route !== '/' && <CoverImage />}
            <div className='flex flex-grow flex-col mx-auto'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout