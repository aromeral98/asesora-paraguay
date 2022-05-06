
export default function CoverImage() {
  return (
    <div class="aspect-w-16 aspect-h-6 lg:aspect-h-3 relative">
    <div class="absolute w-full h-full bg-black/60 z-10"></div>
    <picture class="absolute w-full h-full">
        <img loading="lazy" src="https://tramiteitalia.com/images/web/breadcrumb.webp" alt="Trámite Italia" class="h-full w-full object-cover"/>
    </picture>

    <section class="container text-center h-full w-full flex items-center justify-center flex-col z-20 py-28">
    <h1 class="text-2xl lg:text-5xl text-white font-medium uppercase lg:max-w-3xl z-10">Certificados Italianos</h1>
        <ol class="flex text-white text-xs md:text-sm lg:text-base space-x-2 mt-4 font-normal z-10" itemscope="" itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                <a itemprop="item" href="https://tramiteitalia.com/es">
                    <span itemprop="name">Inicio</span>
                </a>
                <meta itemprop="position" content="1"/>
            </li>
            <span>/</span>
                        <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                <span itemprop="name">Certificados Italianos</span>
                                    <meta itemprop="position" content="2"/>
                            </li>
        </ol>
</section>
</div>
  )
}
