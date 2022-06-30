import Image from 'next/image'
import React from 'react'
import passport from '../public/img/hero.png'

export default function IndexCover() {
    return (
        <div className='index-cover-container'>
            <div className='index-cover-background'></div>
            <div className='index-cover-passport'>
                <Image width={320} height={461} alt='passport' src={passport.src} />
            </div>
            <div className='index-cover-caption-container'>
                <div className="index-cover-caption-title">
                    <h1>
                        Asesora Paraguay
                    </h1>
                    <h2>
                    En Asesora Paraguay nos enfocamos en ayudar a freelancers a mover su residencia fiscal a Paraguay, tenemos a los mejores asesores fiscales y abogados de inmigracion para recomendarte la mejor opcion para tu situacion.
                    Agilizamos todos tus tramites en tiempo record para que puedas empezar a ahorrar impuestos cuanto antes.
                        {/* Asesoramiento de principio a fin del proceso, contacto 24 horas con tu asesor.
                        Realizamos todos tus tramites en Paraguay sin necesidad de viajar al país. */}
                    </h2>
                </div>
            </div>
        </div>
    )
}
