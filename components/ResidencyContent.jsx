import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import ShareBar from './shared/ShareBar'

export default function ResidencyContent() {
    const { t } = useTranslation('global')
    return (
        <div className="max-w-7xl mx-auto px-5 bg-white">
            <section className="container space-y-4 lg:space-y-8 py-8 text-center mx-auto px-5 active">
                <h2 className="text-secondaryColor text-xl lg:text-4xl font-medium leading-tight lg:leading-relaxed text-center">
                    Residency in Paraguay: Why You Should Consider Living in This Hidden Gem of South America
                </h2>
                <p className="text-dark lg:text-lg">
                    Are you <strong>considering a move to South America?</strong> Look no further than Paraguay, a hidden gem that is quickly gaining popularity among <strong>expats and digital nomads</strong> alike.
                </p>
                <p className="text-dark lg:text-lg">
                    Obtaining <strong>residency in Paraguay</strong> is a relatively straightforward process, with clear requirements. To qualify, you&apos;ll need to prove a steady source of income, pass a background check, and provide a few other key documents. Once you&apos;re approved, you&apos;ll have the <strong>freedom to live and work in Paraguay</strong> for as long as you like.
                </p>
                <p className="text-dark lg:text-lg">
                    But residency is just the beginning. Paraguay offers a high quality of life at a low cost, with affordable housing, excellent healthcare, and a laid-back lifestyle that&apos;s hard to beat. Whether you&apos;re looking to retire in a peaceful, picturesque town or start a business in a bustling urban center, Paraguay has something to offer.
                </p>
                <p className="text-dark lg:text-lg">
                    So why not come and live in Paraguay? With its friendly people, rich culture, and stunning natural beauty, it&apos;s a place you won&apos;t soon forget. And with its <strong>affordable cost of living</strong>, you&apos;ll be able to enjoy everything the country has to offer without breaking the bank.
                </p>
                <p className="text-dark lg:text-lg">
                    When it comes to <strong>Paraguay residency requirements</strong>, there are a few key things to keep in mind. Keep reading to get all the details.
                </p>
            </section>
            <section className="container space-y-4 lg:space-y-8 py-8 text-center mx-auto px-5 active">
                <h3 className="text-secondaryColor text-xl lg:text-4xl font-medium leading-tight lg:leading-relaxed text-center">
                    {t('freelancelayout.requirements.title')}
                </h3>
                <div className="space-y-4">
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">1. {t('freelancelayout.requirements.firstrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">2. {t('freelancelayout.requirements.secondrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">3. {t('freelancelayout.requirements.thirdrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">4. {t('freelancelayout.requirements.fourthrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">5. {t('freelancelayout.requirements.fifthrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">6. {t('freelancelayout.requirements.sixthrequiretitle')} </h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">7. {t('freelancelayout.requirements.seventhrequiretitle')} </h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">8. {t('freelancelayout.requirements.eightrequiretitle')} </h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">9. {t('freelancelayout.requirements.ninerequiretitle')} </h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg font-bold leading-tight lg:leading-relaxed text-center">10. {t('freelancelayout.requirements.tenrequiretitle')} </h5>
                    </article>
                </div>
            </section>
            <div className="flex justify-end my-8">
                <ShareBar />
            </div>
            <div className='relative block w-full'>
                <div className='flex flex-col sticky top-8'>
                    <div className='h-full w-full relative'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div >
    )
}
