import IndexCard from "./IndexCard"

export default function IndexCards() {
    const procedures =[
        {title: 'Registro civil italiano', description: 'Tramitamos directamente en Italia actas de registro civil, matrimonio, defunción, partidas de nacimiento, certificados de antecedentes penales, traducciones y legalizaciones con Apostilla de la Haya'},
        {title: 'Registro civil italiano', description: 'Tramitamos directamente en Italia actas de registro civil, matrimonio, defunción, partidas de nacimiento, certificados de antecedentes penales, traducciones y legalizaciones con Apostilla de la Haya'},
        {title: 'Registro civil italiano', description: 'Tramitamos directamente en Italia actas de registro civil, matrimonio, defunción, partidas de nacimiento, certificados de antecedentes penales, traducciones y legalizaciones con Apostilla de la Haya'},
        {title: 'Registro civil italiano', description: 'Tramitamos directamente en Italia actas de registro civil, matrimonio, defunción, partidas de nacimiento, certificados de antecedentes penales, traducciones y legalizaciones con Apostilla de la Haya'},
    ]
    return (
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 py-16">
        {procedures.map(({ title, description }) => {
            return <IndexCard key={title} title={title} description={description} />
        })

        }
      </div>
    )
  }
  