import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function IndexContent() {
  const { t } = useTranslation('global')

  return (
    <div className="relative py-8 bg-white overflow-hidden max-w-7xl mx-auto">
      <section className="container space-y-4 lg:space-y-8 text-center mx-auto px-5 ">
        <h3 className="text-secondaryColor text-xl lg:text-4xl font-medium leading-tight lg:leading-relaxed text-center">
          {t('homelayout.secondcontainer.firsttitle')}
        </h3>
        <div className="space-y-4 lg:space-y-10">
          <p className="text-dark lg:text-lg leading-loose">
            {t('homelayout.secondcontainer.firstparagraph')}
          </p>
          <p className="text-dark lg:text-lg leading-loose">
          {t('homelayout.secondcontainer.secondparagraph')}
          </p>

          <p className="text-dark lg:text-lg leading-loose">
          {t('homelayout.secondcontainer.thirdparagraph')}
          </p>

          <p className="text-dark lg:text-lg leading-loose">
          {t('homelayout.secondcontainer.fourthparagraph')}
          <Link href={'/en/contact'}><strong className="cursor-pointer transition-all hover:text-secondaryColor duration-300">{t('homelayout.secondcontainer.fourthparagraph2')}</strong></Link>
          {t('homelayout.secondcontainer.fourthparagraph3')}
          </p>
        </div>
      </section>
    </div>
  )
}
