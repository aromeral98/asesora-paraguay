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
                        En Asesoría Paraguay, nos especializamos en brindar asesoramiento a freelancers y empresarios que desean trasladar su residencia fiscal a Paraguay. Contamos con un equipo de expertos en asesoría fiscal y abogados de inmigración, quienes te guiarán para encontrar la mejor opción según tus necesidades. Además, nos encargamos de agilizar todos los trámites necesarios en tiempo récord, para que puedas comenzar a ahorrar en impuestos cuanto antes. ¡Contáctanos y comienza a disfrutar de los beneficios fiscales que ofrece Paraguay!
                    </h2>
                </div>
            </div>
        </div>
    )
}
