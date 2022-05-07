import Link from "next/link";
import { useRouter } from "next/router";

export default function CoverImage() {
  const router = useRouter()
  const titles = [
    {title: 'Certificados Paraguayos', subtitle: 'Certificados', path: '/certificates'},
    {title: 'Obtener Ciudadania', subtitle: 'Ciudadania', path: '/citizenship'},
    {title: 'Tramites paraguayos', subtitle: 'Tramites en Paraguay', path: '/procedures'},
    {title: 'contacto', subtitle: 'Contacto', path: '/contact'}
  ]
  const caption = titles.find(routes => router.route === routes.path)

  return (
    <div className="aspect-w-16 aspect-h-6 lg:aspect-h-3 relative">
      <div className="absolute w-full h-full bg-black/60 z-10"></div>
      <picture className="absolute w-full h-full">
        <img loading="lazy" src="https://tramiteitalia.com/images/web/breadcrumb.webp" alt="Trámite Italia" className="h-full w-full object-cover" />
      </picture>

      <section className="container text-center h-full w-full flex items-center justify-center flex-col z-20 py-28">
        <h1 className="text-2xl lg:text-5xl text-white font-medium uppercase lg:max-w-3xl z-10">{caption.title}</h1>
        <ol className="flex text-white text-xs md:text-sm lg:text-base space-x-2 mt-4 font-normal z-10">
          <li>
            <Link href='/'>
              <span className="cursor-pointer underline">Inicio</span>
            </Link>
            <meta content="1" />
          </li>
          <span>/</span>
          <li>
            <span className="underline cursor-default">{caption?.subtitle}</span>
            <meta content="2" />
          </li>
        </ol>
      </section>
    </div>
  )
}
