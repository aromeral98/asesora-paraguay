import IndexCard from "./IndexCard"
import card from '../public/img/card.webp'
import residency from '../public/img/residency.webp'
import passport from '../public/img/passport.webp'
import civilRegister from '../public/img/civilregister.webp'
import { useTranslation } from "react-i18next"

export default function IndexCards() {
  const { t } = useTranslation('global')

  const procedures = [
    // {title: 'Registro civil paraguayo', description: 'Tramitamos actas de registro civil, matrimonio, defunción, partidas de nacimiento, certificados de antecedentes penales y legalizaciones en Paraguay, con rapidez y eficiencia. Confía en nosotros para gestionar tus trámites de manera efectiva.', href: '/certificates', src: civilRegister.src},
    // {title: 'Ciudadanía Paraguaya', description: 'Especialistas en la solicitud de la ciudadanía paraguaya, brindando asesoría y acompañamiento en todas las fases del proceso. Agilizamos todos tus tramites para conseguir tu ciudadania en tiempo record', href: '/citizenship', src: passport.src},
    { title: t('homelayout.secondcontainer.thirdcardtitle'), description: t('homelayout.secondcontainer.thirdcarddescription'), href: '/residency', src: residency.src },
    // {title: 'Tramites en Paraguay', description: 'En Asesora Paraguay te informamos de todos los tramites necesarios, para que tengas que hacer el minimo esfuerzo, nosotros haremos todo lo posible.', href: '/procedures', src: card.src}

  ]
  return (
    <article className="pb-16 px-2 sm:px-8 bg-white max-w-7xl mx-auto active">
      <h3 className="text-secondaryColor  bg-white text-4xl lg:text-5xl font-medium leading-tight lg:leading-relaxed text-center">
        {t('homelayout.secondcontainer.cardstitle')}
      </h3>
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 mt-8">
        {procedures.map(({ title, description, href, src }) => {
          return <IndexCard key={title} title={title} description={description} href={href} src={src} />
        })
        }
      </div>
    </article>

  )
}
