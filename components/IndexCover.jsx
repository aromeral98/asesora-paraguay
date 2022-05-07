import React from 'react'
import passport from '../public/img/hero.png'
export default function IndexCover() {
    return (
        <div className='relative' style={{ backgroundImage: `url(https://st.depositphotos.com/2735675/4370/i/600/depositphotos_43705929-stock-photo-paraguay-flag-waving-on-the.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,backgroundPosition: 'center'}}>
            <div className='absolute w-full h-full z-0' style={{ background: 'rgba(255,255,255,0.5)'}}></div>
            <div className='absolute w-80 right-32 -bottom-16 z-10 hidden lg:block' >
                <img alt='passport' src={passport.src}></img>
            </div>
            <div className='max-w-7xl py-48 mx-auto z-10 relative lg:pl-16 xl:pl-0'>
                <div className="w-full lg:w-6/12 space-y-10">
                    <h1 className="text-dark text-center lg:text-left text-4xl lg:text-7xl !leading-tight font-semibold font-headers">
                        Asesora Paraguay
                    </h1>
                    <p className="hidden lg:block text-dark text-lg leading-relaxed">
                        Asesoramiento de principio a fin del proceso, contacto 24 horas con tu asesor.
                        Realizamos todos tus tramites en Paraguay sin necesidad de viajar al país.
                    </p>
                </div>

            </div>
        </div>
    )
}
