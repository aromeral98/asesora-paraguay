
export default function CoverImage() {
  return (
    <div className="aspect-w-16 aspect-h-6 lg:aspect-h-3 relative">
      <div className="absolute w-full h-full bg-black/60 z-10"></div>
      <picture className="absolute w-full h-full">
        <img loading="lazy" src="https://tramiteitalia.com/images/web/breadcrumb.webp" alt="Trámite Italia" className="h-full w-full object-cover" />
      </picture>

      <section className="container text-center h-full w-full flex items-center justify-center flex-col z-20 py-28">
        <h1 className="text-2xl lg:text-5xl text-white font-medium uppercase lg:max-w-3xl z-10">Certificados Italianos</h1>
        <ol className="flex text-white text-xs md:text-sm lg:text-base space-x-2 mt-4 font-normal z-10" itemScope="" itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
            <a itemProp="item" href="https://tramiteitalia.com/es">
              <span itemProp="name">Inicio</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <span>/</span>
          <li itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
            <span itemProp="name">Certificados Paraguayos</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </section>
    </div>
  )
}
