import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

export default function FreelanceContent() {
    const { t } = useTranslation('global')

    return (
        <div className="relative py-16 lg:px-8 px-4 bg-white overflow-hidden max-w-7xl mx-auto">
            <section className="container space-y-4 lg:space-y-8 text-center mx-auto px-5 " >
                <h2 className="text-secondaryColor text-4xl lg:text-5xl font-medium leading-tight lg:leading-relaxed text-center">
                    {t('freelancelayout.advantages.title')}
                </h2>
                <div className="space-y-4 lg:space-y-8">
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">1. Tributación territorial</h5>
                        <p className="text-dark lg:text-lg">
                            El sistema tributario del Paraguay, solo <strong>grava las rentas obtenidas dentro del territorio nacional</strong>. Por lo cual si eres nomada digital y todos tus ingresos provienen de fuera del Paraguay, estarás totalmente exento de tributar por ellos.

                            El pago de dividendos provenientes de una empresa extranjera tambien estarían totalmente libres de impuestos, por lo cual <strong>
                                seria ideal para combinar tu residencia, una empresa offshore o LLC para librarte del 100% de los impuestos.
                            </strong>
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">2. Visita el pais un mínimo de 1 vez cada 3 años</h5>
                        <p className="text-dark lg:text-lg">
                            Paraguay <strong>no te obliga a pasar medio año en el país para tributar en el</strong>, a diferencia de la casi totalidad de paises.
                            <br />
                            Por lo que según la regulacion actual del país debes pasar al menos 1 vez cada 3 años por el país para demostrar que efectivamente resides en el.
                            De igual forma no hay forma de comprobar esa estadia por lo tanto hay gente que pasa periodos más largos sin entrar al Paraguay.
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">3. Buen clima para emprendimiento</h5>
                        <p className="text-dark lg:text-lg">
                            Paraguay es un país en el cual las infraestructuras todavia estan por desarrollar y mejorar en gran parte.Por lo tanto se vuelve una buena opción a la hora
                            de inversion, gracias a los <strong>bajos impuestos 10% de IVA y 10% de IRPF</strong> y la ayuda de los gobiernos para incentivar la inversión extranjera en el país en cualquiera de sus formas.
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">4. Residencia permanente vitalicia</h5>
                        <p className="text-dark lg:text-lg">
                            A fecha de hoy la residencia permanente en Paraguay no tiene fecha de caducidad por lo tanto no tendrá que preocuparse por renovarla.
                        </p>
                    </article>
                    <article>
                        <h5 className="text-primaryColor text-lg lg:text-xl font-medium leading-tight lg:leading-relaxed text-center">5. Derechos con tu residencia</h5>
                        <p className="text-dark lg:text-lg">
                            Otra de las ventajas del paraguay es que una vez obtengas tu residencia, <strong>podrás acceder a los mismos derechos que cualquier ciudadano</strong> excepto a la participacion en la politica.
                            Podras montar empresas, negocios, sacarte el carnet de conducir, invertir e incluso podra comprar propiedades si su objetivo es quedarse a vivir o incluso entrar en el negocio inmobiliario.
                        </p>
                    </article>
                </div>
            </section>
            <section className="container space-y-4 lg:space-y-8 pt-8 lg:pt-16 text-center mx-auto px-5 active">
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
            <div className='relative block w-full mt-8'>
                <div className='h-full w-full relative'>
                    <ContactForm bigTitle />
                </div>
            </div>
        </div>
    )
}
