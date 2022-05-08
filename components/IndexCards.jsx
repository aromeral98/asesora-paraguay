import IndexCard from "./IndexCard"
import card from '../public/img/card.jpg'
import residency from '../public/img/residency.jpg'
import passport from '../public/img/passport.jpg'
import civilRegister from '../public/img/civilRegister.jpg'

export default function IndexCards() {
    const procedures =[
      {title: 'Registro civil paraguayo', description: 'Tramitamos directamente en Paraguay actas de registro civil, matrimonio, defunción, partidas de nacimiento, certificados de antecedentes penales, traducciones y legalizaciones con Apostilla de la Haya', href: '/certificates', src: civilRegister.src},
        {title: 'Ciudadanía Paraguaya', description: 'Especialistas en la solicitud de la ciudadanía paraguaya, brindando asesoría y acompañamiento en todas las fases del proceso. Dicha ciudadanía puede ser adquirida por varias vías', href: '/citizenship', src: passport.src},
        {title: 'Residencia Paraguaya', description: 'Especialistas en la solicitud de la ciudadanía paraguaya, brindando asesoría y acompañamiento en todas las fases del proceso. Dicha ciudadanía puede ser adquirida por varias vías', href: '/residency', src: residency.src},
        {title: 'Tramites en Paraguay', description: 'Especialistas en la solicitud de la ciudadanía paraguaya, brindando asesoría y acompañamiento en todas las fases del proceso. Dicha ciudadanía puede ser adquirida por varias vías', href: '/procedures', src: card.src}
        
    ]
    return (
      <article className="pb-16 bg-white max-w-7xl mx-auto reveal">
      <h2 className="text-secondaryColor  bg-white text-4xl lg:text-5xl font-medium leading-tight lg:leading-relaxed text-center">
        ¿En qué podemos ayudarte?
    </h2>
    <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 mt-8">
        {procedures.map(({ title, description, href, src }) => {
            return <IndexCard key={title} title={title} description={description} href={href} src={src} />
        })
        }
      </div>
      </article>
      
    )
  }
  