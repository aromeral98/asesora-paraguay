import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import ShareBar from './shared/ShareBar'

export default function ResidencyContent() {
    const { t } = useTranslation('global')
    return (
        <div className="max-w-7xl mx-auto px-5 bg-white">
            <section className="container space-y-4 lg:space-y-8 py-8 text-center mx-auto px-5 active">
                <h2 className="text-secondaryColor text-4xl lg:text-5xl font-medium leading-tight lg:leading-relaxed text-center">
                    {t('freelancelayout.requirements.title')}
                </h2>
                <div className="space-y-4 lg:space-y-8">
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">1. {t('freelancelayout.requirements.firstrequiretitle')}</h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.requirements.firstrequiredescription')}
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">2. {t('freelancelayout.requirements.secondrequiretitle')}</h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.requirements.secondrequiredescription')}
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">3. {t('freelancelayout.requirements.thirdrequiretitle')}</h5>
                        <div className="text-dark lg:text-lg">
                            {t('freelancelayout.requirements.thirdrequiredescription')}
                            <p className="bg-yellow-300 border border-yellow-600 my-2 p-2 rounded-lg">
                                {t('freelancelayout.requirements.thirdrequiredescription2')}
                            </p>
                        </div>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">4. {t('freelancelayout.requirements.fourthrequiretitle')}</h5>
                        <div className="text-dark lg:text-lg">
                            {t('freelancelayout.requirements.fourthrequiredescription')}
                            <div className="bg-yellow-300 border border-yellow-600 my-2 p-2 rounded-lg">{t('freelancelayout.requirements.fourthrequiredescription2')}
                                <p className="my-2">{t('freelancelayout.requirements.fourthrequiredescription3')}</p>
                                <p className="my-2">
                                    {t('freelancelayout.requirements.fourthrequiredescription4')}
                                </p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">5. {t('freelancelayout.requirements.fifthrequiretitle')}</h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.requirements.fifthrequiredescription')}
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">6. {t('freelancelayout.requirements.sixthrequiretitle')} </h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.requirements.sixthrequiredescription')}
                        </p>
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
