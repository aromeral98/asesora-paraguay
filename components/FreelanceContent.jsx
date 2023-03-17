import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import ShareBar from "./shared/ShareBar";

export default function FreelanceContent() {
    const { t } = useTranslation('global')
    return (
        <div className="relative py-8 lg:px-8 px-4 bg-white overflow-hidden max-w-7xl mx-auto">
            <section className="container space-y-4 text-center mx-auto px-5 " >
                <h2 className="text-secondaryColor text-xl lg:text-4xl font-medium leading-tight lg:leading-relaxed text-center">
                    {t('freelancelayout.advantages.title')}
                </h2>
                <div className="space-y-4 lg:space-y-8">
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">1. {t('freelancelayout.advantages.firstadvantagetitle')}</h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.advantages.firstadvantagedescription')}
                            <strong>{t('freelancelayout.advantages.firstadvantagedescription2')}</strong>
                            {t('freelancelayout.advantages.firstadvantagedescription3')}
                            <strong>{t('freelancelayout.advantages.firstadvantagedescription4')}</strong>
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">2. {t('freelancelayout.advantages.secondadvantagetitle')}</h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.advantages.secondadvantagedescription')}
                            <strong>{t('freelancelayout.advantages.secondadvantagedescription2')}</strong>
                            {t('freelancelayout.advantages.secondadvantagedescription3')}
                            <br />
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">3. {t('freelancelayout.advantages.thirdadvantagetitle')}</h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.advantages.thirdadvantagedescription')}
                            <strong>{t('freelancelayout.advantages.thirdadvantagedescription2')}</strong>
                            {t('freelancelayout.advantages.thirdadvantagedescription3')}
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">4. {t('freelancelayout.advantages.fourthadvantagetitle')}</h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.advantages.fourthadvantagedescription')}
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">5. {t('freelancelayout.advantages.fifthadvantagetitle')}</h5>
                        <p className="text-dark lg:text-lg">
                            {t('freelancelayout.advantages.fifthadvantagedescription')}
                            <strong>{t('freelancelayout.advantages.fifthadvantagedescription2')}</strong>
                            {t('freelancelayout.advantages.fifthadvantagedescription3')}
                        </p>
                    </article>
                </div>
            </section>
            <section className="container space-y-4 pt-8 lg:pt-16 text-center mx-auto px-5 active">
                <h2 className="text-secondaryColor text-xl lg:text-4xl font-medium leading-tight lg:leading-relaxed text-center">
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
            <div className='relative block w-full mt-8'>
                <div className='h-full w-full relative'>
                    <ContactForm bigTitle />
                </div>
            </div>
        </div>
    )
}
