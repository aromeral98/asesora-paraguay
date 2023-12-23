import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import ShareBar from './shared/ShareBar'

export default function ResidencyContent() {
    const { t } = useTranslation('global')
    return (
        <div className="max-w-7xl mx-auto px-5 bg-white">
            <section className="container space-y-4 lg:space-y-8 py-8 text-center mx-auto px-5 active">
                <h3 className="text-secondaryColor text-xl lg:text-4xl font-medium leading-tight lg:leading-relaxed text-center">
                    {t('freelancelayout.requirements.title')}
                </h3>
                <div className="space-y-4">
                    <article>
                        <h5 className="text-black text-lg leading-tight lg:leading-relaxed text-left">1. {t('freelancelayout.requirements.firstrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg leading-tight lg:leading-relaxed text-left">2. {t('freelancelayout.requirements.secondrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg leading-tight lg:leading-relaxed text-left">3. {t('freelancelayout.requirements.thirdrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg leading-tight lg:leading-relaxed text-left">4. {t('freelancelayout.requirements.fourthrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg leading-tight lg:leading-relaxed text-left">5. {t('freelancelayout.requirements.fifthrequiretitle')}</h5>
                    </article>
                    <article>
                        <h5 className="text-black text-lg leading-tight lg:leading-relaxed text-left">6. {t('freelancelayout.requirements.sixthrequiretitle')} </h5>
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
