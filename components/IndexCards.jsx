import IndexCard from "./IndexCard"

export default function IndexCards() {
    const procedures =[
        {title: 'Ciudadanía Italiana', description: 'Especialistas en la solicitud de la ciudadanía italiana, brindando asesoría y acompañamiento en todas las fases del proceso. Dicha ciudadanía puede ser adquirida por varias vías', href: '/citizenship'},
        {title: 'Registro civil italiano', description: 'Tramitamos directamente en Italia actas de registro civil, matrimonio, defunción, partidas de nacimiento, certificados de antecedentes penales, traducciones y legalizaciones con Apostilla de la Haya', href: '/certificates'}
    ]
    return (
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 py-16">
        {procedures.map(({ title, description, href }) => {
            return <IndexCard key={title} title={title} description={description} href={href} />
        })

        }
      </div>
    )
  }
  