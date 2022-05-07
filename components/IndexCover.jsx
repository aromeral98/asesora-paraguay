import React from 'react'

export default function IndexCover() {
    return (
        <div className='relative' style={{ backgroundImage: `url(https://pbs.twimg.com/media/EB7kAwQXkAAH7uP.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,backgroundPosition: 'center'}}>
            <div className='absolute w-full h-full z-0' style={{ background: 'rgba(255,255,255,0.4)'}}></div>
            <div className='absolute w-6/12 right-0 -bottom-6 z-10 hidden lg:block' >
                <img alt='passport' src='https://w7.pngwing.com/pngs/436/242/png-transparent-computer-icons-passport-pasport.png'></img>
            </div>
            <div className='max-w-7xl py-48 mx-auto z-10 relative lg:pl-16 xl:pl-0'>
                <div class="w-full lg:w-6/12 space-y-10">
                    <h1 class="text-dark text-center lg:text-left text-4xl lg:text-7xl !leading-tight font-semibold font-headers">
                        Tramite Paraguay
                    </h1>
                    <p class="hidden lg:block text-dark text-lg leading-relaxed">
                        Queremos facilitarte la vida ofreciéndote las mejores soluciones jurídicas para tus trámites adminisitrativos y legales en Italia
                    </p>
                </div>

            </div>
        </div>
    )
}
