import { useTranslation } from "react-i18next"

export default function IndexContent() {
  const { t } = useTranslation('global')

  return (
    <div className="relative py-8 bg-white overflow-hidden max-w-7xl mx-auto">
      <section className="container space-y-4 lg:space-y-8 text-center mx-auto px-5 ">
        <h3 className="text-secondaryColor text-4xl lg:text-5xl font-medium leading-tight lg:leading-relaxed text-center">
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
          </p>
        </div>
      </section>
    </div>
  )
}
