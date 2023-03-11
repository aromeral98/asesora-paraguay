import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import passport from '../public/img/hero.png'

export default function IndexCover() {
    const { t } = useTranslation('global')
    return (
        <section className='index-cover-container'>
            <div className='index-cover-background'></div>
            <div className='index-cover-passport'>
                <Image width={320} height={461} alt='passport' src={passport.src} />
            </div>
            <div className='index-cover-caption-container'>
                <div className="index-cover-caption-title">
                    <h1>
                        {t('homelayout.firstcontainer')}
                    </h1>
                </div>
            </div>
        </section>
    )
}
